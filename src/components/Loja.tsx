
import { ArrowLeft, ShoppingBag, Copy, Check } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { ProductCarousel } from './ProductCarousel';
import { WhatsAppSupport } from './WhatsAppSupport';

export const Loja = () => {
  const { setCurrentFunction } = useNavigation();
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleBack = () => {
    setCurrentFunction(null);
  };

  const handleBackToIntro = () => {
    setShowIntro(true);
  };

  const handleEnterStore = async () => {
    setIsLoading(true);
    // Simular carregamento suave
    setTimeout(() => {
      setShowIntro(false);
      setIsLoading(false);
    }, 800);
  };

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText('WN7PR10');
      setCopiedCoupon(true);
      toast({
        title: "Cupom copiado!",
        description: "O código WN7PR10 foi copiado para sua área de transferência."
      });
      setTimeout(() => setCopiedCoupon(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o cupom. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center mx-0 rounded-sm px-[3px]">
          <button
            onClick={showIntro ? handleBack : handleBackToIntro}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {showIntro ? 'Voltar' : 'Voltar à Introdução'}
          </button>
          <div className="flex-1 text-center">
            
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {showIntro ? (
        /* Tela de Introdução Redesenhada */
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          
          {/* Carrossel de Produtos em Destaque no Topo */}
          <div className="mb-8">
            <ProductCarousel />
          </div>

          {/* Seção Principal com Título e Botão de Destaque */}
          <div className="text-center mb-8">
            <div className="gradient-store w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center animate-store-glow shadow-lg">
              <ShoppingBag className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-3 gradient-text-legal">
              Loja de Direito
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Produtos especializados selecionados para potencializar seus estudos jurídicos
            </p>

            {/* Botão Principal de Destaque */}
            <button
              onClick={handleEnterStore}
              disabled={isLoading}
              className="btn-store px-8 py-4 rounded-xl text-lg font-bold inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed animate-glow-pulse shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Carregando Loja...
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  Entrar na Loja Agora
                </>
              )}
            </button>
          </div>

          {/* Card de Oferta Especial com Logo do Mercado Livre */}
          <div className="card-legal rounded-2xl p-6 mb-8 text-center relative overflow-hidden animate-scale-in max-w-md mx-auto">
            <div className="absolute inset-0 gradient-store opacity-10 animate-legal-shimmer"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://s2.glbimg.com/Bu6upvmSg6SRv0za635uXphThKo=/620x430/e.glbimg.com/og/ed/f/original/2020/03/28/mercado-livre.jpg"
                  alt="Mercado Livre"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-store-primary">
                Oferta Exclusiva
              </h3>
              
              <p className="text-base mb-4">
                Ganhe <span className="text-store-primary text-xl font-bold">10% de desconto</span> na sua primeira compra!
              </p>
              
              <div 
                className="bg-green-600 text-white px-4 py-3 rounded-xl inline-flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 mb-3"
                onClick={handleCopyCoupon}
              >
                <code className="text-lg font-mono font-bold">WN7PR10</code>
                {copiedCoupon ? (
                  <Check className="h-5 w-5 animate-scale-in" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                Toque no código para copiá-lo
              </p>
            </div>
          </div>

          {/* Grid de Benefícios - Layout mais compacto */}
          <div className="grid grid-cols-1 gap-4 mb-8 max-w-md mx-auto">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-community-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold mb-2">Livros Especializados</h4>
              <p className="text-sm text-muted-foreground">Obras atualizadas dos melhores autores do Direito</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-premium-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold mb-2">Materiais de Estudo</h4>
              <p className="text-sm text-muted-foreground">Resumos, mapas mentais e guias práticos</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-store-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🖊️</span>
              </div>
              <h4 className="font-semibold mb-2">Produtos de Escritório</h4>
              <p className="text-sm text-muted-foreground">Materiais profissionais para advogados</p>
            </div>
          </div>

          {/* Footer com Garantias */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground bg-card/30 rounded-xl p-4 backdrop-blur-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📦</span>
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">💯</span>
              <span>Produtos Verificados</span>
            </div>
          </div>

          {/* Seção Mercado Livre */}
          <div className="text-center bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-xl p-6 border">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text-legal">
              Compras via Mercado Livre
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Todas as nossas compras são processadas através do <strong>Mercado Livre</strong>, 
              garantindo total segurança, proteção ao comprador e entrega confiável em todo o Brasil.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>Mercado Pago</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🏆</span>
                <span>Mercado Líder</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span>Avaliações Verificadas</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Iframe da Loja */
        <div className="w-full" style={{ height: 'calc(100vh - 56px)' }}>
          <iframe
            src="https://appdireitoestudos.vercel.app/"
            className="w-full h-full border-0"
            title="Loja de Direito"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
            loading="lazy"
          />
        </div>
      )}

      {/* Componente de Suporte WhatsApp Flutuante - apenas quando showIntro é true */}
      {showIntro && <WhatsAppSupport />}
    </div>
  );
};
