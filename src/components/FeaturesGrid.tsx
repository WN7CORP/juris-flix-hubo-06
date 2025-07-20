import { Card, CardContent } from '@/components/ui/card';
import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useNavigation } from '@/context/NavigationContext';
import { ArrowRight, GitBranch, Scale, Bot, Headphones, Library, Monitor, Play, Folder, Newspaper, Film, Brain, BookOpen, FileText, Search, GraduationCap, Calendar, Clock, Award, Target, Bookmark, Download, Upload, Share, Heart, Star, Zap, Shield, Globe, Camera, Music, Video, Image, File, Archive, Code, Database, Hammer, ShoppingBag, Users, Sparkles } from 'lucide-react';

// Definição das categorias e suas funções
const categoriesConfig = {
  'Biblioteca e Leitura': {
    color: 'emerald',
    functions: [1, 3, 15, 2],
    // Vade Mecum, Biblioteca, Dicionário, Downloads
    gradient: 'from-emerald-500 to-green-600'
  },
  'Estudos e Aprendizado': {
    color: 'blue',
    functions: [4, 8, 11, 5, 13, 9, 18],
    // Áudio-aulas, Videoaulas, Cursos, Resumos, Mapas, Flashcards, Desktop
    gradient: 'from-blue-500 to-sky-600'
  },
  'Preparação para Provas': {
    color: 'orange',
    functions: [6, 7],
    // Banco de Questões, Simulados OAB
    gradient: 'from-orange-500 to-amber-600'
  },
  'Ferramentas Práticas': {
    color: 'purple',
    functions: [10, 12],
    // Modelos de Petições (apenas ID 10), Assistente IA
    gradient: 'from-purple-500 to-violet-600'
  },
  'Atualizações e Informações': {
    color: 'cyan',
    functions: [17, 16],
    // Notícias Jurídicas, Juriflix
    gradient: 'from-cyan-500 to-teal-600'
  }
};

// Mapeamento de ícones por função
const getIconForFunction = (funcao: string, id: number) => {
  const name = funcao.toLowerCase();

  // Mapeamento específico por ID e nome
  if (id === 1 || name.includes('vade') || name.includes('mecum')) return Scale;
  if (id === 12 || name.includes('assistente') && name.includes('ia')) return Bot;
  if (id === 3 || name.includes('biblioteca')) return Library;
  if (id === 4 || name.includes('audio') || name.includes('áudio')) return Headphones;
  if (id === 13 || name.includes('mapa') && name.includes('mental')) return Brain;
  if (id === 18 || name.includes('plataforma') && name.includes('desktop')) return Monitor;
  if (id === 9 || name.includes('flashcard') || name.includes('flash card')) return Brain;
  if (id === 5 || name.includes('resumo')) return BookOpen;
  if (id === 8 || name.includes('video') || name.includes('vídeo') || name.includes('aula')) return Play;
  if (id === 10 || name.includes('petições') || name.includes('peticoes') || name.includes('petição')) return Folder;
  if (id === 17 || name.includes('noticia') || name.includes('notícia') || name.includes('juridica')) return Newspaper;
  if (id === 16 || name.includes('juriflix') || name.includes('filme') || name.includes('cinema')) return Film;
  if (id === 6 || name.includes('questões') || name.includes('questao') || name.includes('questão')) return Target;
  if (id === 7 || name.includes('simulado') || name.includes('prova') || name.includes('oab')) return Hammer;
  if (id === 11 || name.includes('curso')) return GraduationCap;
  if (id === 15 || name.includes('dicionário') || name.includes('dicionario')) return Search;
  if (id === 2 || name.includes('download') || name.includes('baixar')) return Download;
  return BookOpen; // ícone padrão
};
export const FeaturesGrid = () => {
  const {
    functions,
    loading
  } = useAppFunctions();
  const {
    setCurrentFunction
  } = useNavigation();
  const handleFunctionClick = (funcao: string) => {
    setCurrentFunction(funcao);
  };

  // Função para agrupar funções por categoria
  const groupFunctionsByCategory = () => {
    const grouped: {
      [key: string]: typeof functions;
    } = {};
    Object.entries(categoriesConfig).forEach(([categoryName, config]) => {
      grouped[categoryName] = functions.filter(func => config.functions.includes(func.id) && func.id !== 14 // Remove duplicata do ID 14
      );
    });
    return grouped;
  };
  if (loading) {
    return <div className="py-12 sm:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text-legal">
              Ferramentas Jurídicas Profissionais
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Carregando funcionalidades...
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => <Card key={i} className="animate-pulse card-legal">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-muted rounded-xl animate-legal-shimmer"></div>
                  <div className="h-4 bg-muted rounded mb-2 animate-legal-shimmer"></div>
                  <div className="h-3 bg-muted rounded animate-legal-shimmer"></div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>;
  }
  const groupedFunctions = groupFunctionsByCategory();
  return <div className="py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Botões destacados redesenhados com design profissional */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fade-in">
          {/* Botão Loja - Design profissional */}
          <button onClick={() => setCurrentFunction('Loja')} className="group relative overflow-hidden bg-gradient-to-r from-store-primary to-store-secondary hover:from-store-secondary hover:to-store-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-store-primary/25 transform hover:scale-[1.02] transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center border border-store-primary/20">
            <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
              <ShoppingBag className="w-5 h-5 text-white icon-hover-bounce" />
            </div>
            <span className="font-medium">Loja de Direito</span>
            <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
          
          {/* Botão Comunidade - Design profissional */}
          
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text-legal">
            Ferramentas Jurídicas Profissionais
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Acesse todas as funcionalidades organizadas por categoria
          </p>
        </div>

        {/* Renderização por categorias */}
        {Object.entries(groupedFunctions).map(([categoryName, categoryFunctions], categoryIndex) => {
        if (categoryFunctions.length === 0) return null;
        const categoryConfig = categoriesConfig[categoryName as keyof typeof categoriesConfig];
        return <div key={categoryName} className="mb-12 animate-fade-in">
              {/* Título da categoria */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-1 flex-1 bg-gradient-to-r ${categoryConfig.gradient} rounded-full`}></div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${categoryConfig.color}-500 px-4 py-2 rounded-lg bg-${categoryConfig.color}-500/10 border border-${categoryConfig.color}-500/20`}>
                  {categoryName}
                </h3>
                <div className={`h-1 flex-1 bg-gradient-to-r ${categoryConfig.gradient} rounded-full`}></div>
              </div>

              {/* Grid de funções da categoria */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8">
                {categoryFunctions.map((func, index) => {
              const Icon = getIconForFunction(func.funcao, func.id);
              return <Card key={func.id} className="card-legal group cursor-pointer overflow-hidden animate-fade-in hover:animate-legal-float border-0" onClick={() => handleFunctionClick(func.funcao)} style={{
                animationDelay: `${categoryIndex * 100 + index * 50}ms`
              }}>
                      <CardContent className="p-4 sm:p-6 text-center relative">
                        {/* Gradient background effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryConfig.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
                        
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${categoryConfig.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative shadow-lg`}>
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white transition-colors duration-300 icon-hover-bounce icon-float-gentle" />
                          
                          {/* Professional hover arrow */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 shadow-lg">
                            <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-600" />
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2">
                          {func.funcao}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-500 line-clamp-2">
                          {func.descricao || 'Funcionalidade especializada para estudos jurídicos'}
                        </p>

                        {/* Professional interactive border effect */}
                        <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-${categoryConfig.color}-500/30 transition-all duration-500`} />
                      </CardContent>
                    </Card>;
            })}
              </div>
            </div>;
      })}

        {functions.length === 0 && !loading && <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Nenhuma função encontrada. Verifique a configuração da base de dados.
            </p>
          </div>}
      </div>
    </div>;
};