import { Bot, Scale, Monitor, Headphones, BookOpen } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessSection = () => {
  const { setCurrentFunction } = useNavigation();
  
  const quickItems = [{
    id: 1,
    title: 'Vade Mecum',
    active: true,
    icon: Scale,
    functionName: 'Vade Mecum Digital'
  }, {
    id: 2,
    title: 'Assistente IA',
    active: true,
    icon: Bot,
    functionName: 'Assistente IA'
  }, {
    id: 3,
    title: 'Plataforma Desktop',
    active: true,
    icon: Monitor,
    functionName: 'Plataforma Desktop'
  }, {
    id: 4,
    title: 'Áudio-aulas',
    active: true,
    icon: Headphones,
    functionName: 'Audioaulas'
  }, {
    id: 5,
    title: 'Biblioteca Jurídica',
    active: true,
    icon: BookOpen,
    functionName: 'Biblioteca Jurídica'
  }];

  const handleItemClick = (item: typeof quickItems[0]) => {
    if (item.active) {
      setCurrentFunction(item.functionName);
    }
  };
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 text-center mx-4 mb-6 shadow-lg">
      {/* Título */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Acesso Rápido</h2>
      
      {/* Grid compacto de itens */}
      <div className="flex justify-center items-center gap-6 mt-4">
        {quickItems.slice(0, 5).map((item, index) => (
          <div 
            key={item.id} 
            className="group cursor-pointer transition-all duration-300 hover:scale-105" 
            onClick={() => handleItemClick(item)} 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Círculo compacto com ícone */}
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${item.active ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 shadow-md' : 'border-border bg-muted text-muted-foreground'} group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5`}>
              <item.icon className={`w-5 h-5 icon-hover-bounce ${item.active ? 'icon-pulse-active' : ''}`} />
            </div>
            
            {/* Texto compacto abaixo */}
            <p className={`text-xs font-medium max-w-16 mx-auto leading-tight transition-colors duration-300 ${item.active ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};