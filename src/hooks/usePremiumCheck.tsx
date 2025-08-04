import { useState, useEffect } from 'react';
import { detectPlatform, getStoreUrl } from '@/utils/platformDetection';

// Funcionalidades que são GRATUITAS (não precisam de premium)
const FREE_FUNCTIONS = [
  'Videoaulas',
  'Resumos Jurídicos', 
  'Assistente IA',
  'Assistente IA Jurídica',
  'Dicionário Jurídico',
  'Audio Aulas',
  'Simulados OAB',
  'JurisFlix',
  'Notícias Jurídicas',
  'Premium', // Para poder acessar a página de upgrade
  'Suporte' // Para poder acessar suporte
];

// Simular verificação de usuário premium
// Na implementação real, isso viria de uma API ou localStorage
const checkPremiumStatus = (): boolean => {
  // Por enquanto, sempre retorna false para demonstrar o sistema
  // Em produção, verificaria através de:
  // - API do backend
  // - Token JWT
  // - localStorage com dados validados
  return false;
};

export const usePremiumCheck = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = checkPremiumStatus();
        setIsPremium(status);
      } catch (error) {
        console.error('Erro ao verificar status premium:', error);
        setIsPremium(false);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  const requiresPremium = (functionName: string): boolean => {
    // Verifica se a função requer premium
    return !FREE_FUNCTIONS.includes(functionName);
  };

  const canAccessFunction = (functionName: string): boolean => {
    // Se não requer premium, sempre pode acessar
    if (!requiresPremium(functionName)) {
      return true;
    }
    
    // Se requer premium, só pode acessar se for usuário premium
    return isPremium;
  };

  const handlePremiumUpgrade = (): void => {
    const platform = detectPlatform();
    const storeUrl = getStoreUrl(platform);
    
    // Abrir a loja apropriada em uma nova aba
    window.open(storeUrl, '_blank');
  };

  const updatePremiumStatus = (status: boolean): void => {
    setIsPremium(status);
  };

  return {
    isPremium,
    loading,
    requiresPremium,
    canAccessFunction,
    handlePremiumUpgrade,
    updatePremiumStatus
  };
};