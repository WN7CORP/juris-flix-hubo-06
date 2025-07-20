
import { useState } from 'react';
import { Edit3, Bot, Scale, Monitor, Headphones, BookOpen, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { setCurrentFunction } = useNavigation();
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true, icon: Scale, functionName: 'Vade Mecum Digital' },
    { id: 2, title: 'Assistente IA', active: true, icon: Bot, functionName: 'Assistente IA' },
    { id: 3, title: 'Plataforma Desktop', active: true, icon: Monitor, functionName: 'Plataforma Desktop' },
    { id: 4, title: 'Áudio-aulas', active: true, icon: Headphones, functionName: 'Audioaulas' },
    { id: 5, title: 'Biblioteca Jurídica', active: true, icon: BookOpen, functionName: 'Biblioteca Jurídica' },
  ]);

  const toggleItem = (id: number) => {
    setQuickItems(items => 
      items.map(item => 
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleItemClick = (item: typeof quickItems[0]) => {
    if (!isEditing && item.active) {
      setCurrentFunction(item.functionName);
    } else if (isEditing) {
      toggleItem(item.id);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 text-center mx-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary mb-1">Acesso Rápido</h3>
          <p className="text-muted-foreground text-xs">Funcionalidades mais utilizadas</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600 hover:text-yellow-500 border border-yellow-500/30 hover:border-yellow-400/50 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300"
          >
            <Edit3 className="w-3 h-3 mr-1 icon-scale-hover" />
            <span>Editar</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
            >
              <Check className="w-3 h-3 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-lg px-3 py-1.5 text-sm transition-all duration-300"
            >
              <X className="w-3 h-3 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Grid compacto de itens */}
      <div className="flex justify-center items-center gap-6 mt-4">
        {quickItems.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className={`group cursor-pointer transition-all duration-300 ${
              isEditing ? 'hover:scale-110' : 'hover:scale-105'
            }`}
            onClick={() => handleItemClick(item)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Círculo compacto com ícone */}
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              item.active 
                ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 shadow-md' 
                : 'border-border bg-muted text-muted-foreground'
            } ${isEditing ? 'group-hover:border-yellow-500/70 group-hover:bg-yellow-500/15' : 'group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5'}`}>
              <item.icon className={`w-5 h-5 icon-hover-bounce ${item.active ? 'icon-pulse-active' : ''}`} />
            </div>
            
            {/* Texto compacto abaixo */}
            <p className={`text-xs font-medium max-w-16 mx-auto leading-tight transition-colors duration-300 ${
              item.active ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {item.title}
            </p>
            
            {/* Checkbox compacto para modo de edição */}
            {isEditing && (
              <div className={`mt-1.5 w-3 h-3 mx-auto rounded-full border flex items-center justify-center transition-all duration-200 ${
                item.active 
                  ? 'bg-yellow-500 border-yellow-500' 
                  : 'border-muted-foreground'
              }`}>
                {item.active && <Check className="w-2 h-2 text-white" />}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <p className="text-xs text-muted-foreground mt-4 text-center">
          💡 Clique nos itens para ativar/desativar
        </p>
      )}
    </div>
  );
};
