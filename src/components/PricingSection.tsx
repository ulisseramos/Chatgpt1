import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, Shield } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing-section" className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Escolha Seu Plano
          </h2>
          <p className="text-gray-400 text-sm">
            Acesso completo por uma fração do preço oficial
          </p>
        </div>

        {/* Comparação de preços */}
        <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 mb-6">
          <div className="text-center">
            <h3 className="text-red-400 font-medium text-sm mb-3">⚠️ Preços Oficiais vs. Nossa Oferta</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ChatGPT Plus (oficial):</span>
                <span className="text-red-400 font-semibold line-through">R$97/mês</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Nossa oferta:</span>
                <span className="text-green-400 font-bold">R$10/mês</span>
              </div>
              <div className="border-t border-red-500/20 pt-2 text-center">
                <span className="text-green-400 font-bold">Economia: R$87/mês</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Plano Básico */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                Mais Popular
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                Acesso Mensal
              </h3>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-1">R$10</div>
                <div className="text-gray-400 text-sm">por 30 dias de acesso</div>
                <div className="text-xs text-green-400 font-medium mt-1">Economia de R$87</div>
              </div>
              
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">ChatGPT Plus completo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Geração de imagens ilimitada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">GPT-4 sem limites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Acesso imediato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Garantia de 7 dias</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200"
                onClick={() => window.open('https://www.ggcheckout.com/checkout/v2/cRKJkTGoqHpb32qDdjMj', '_blank')}
              >
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="relative bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <Crown className="w-3 h-3 mr-1" />
                Melhor Valor
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center justify-center">
                <Crown className="w-4 h-4 text-purple-400 mr-2" />
                Acesso Anual
              </h3>
              
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-xl font-medium text-gray-400 line-through">R$120</span>
                  <span className="text-3xl font-bold text-white">R$27</span>
                </div>
                <div className="text-gray-400 text-sm">por 12 meses de acesso</div>
                <div className="text-xs text-green-400 font-medium mt-1">Economia de R$1.114/ano</div>
              </div>
              
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Tudo do plano mensal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Acesso prioritário</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Garantia de 30 dias</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-200"
                onClick={() => window.open('https://www.ggcheckout.com/checkout/v2/2VQCZvQF0hu2uJG1UhHZ', '_blank')}
              >
                Escolher Premium
              </Button>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 mt-6 text-center">
          <h3 className="text-green-400 font-medium mb-2 flex items-center justify-center">
            <Shield className="w-4 h-4 mr-2" />
            Garantia de Satisfação
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Se não conseguir acessar ou não ficar satisfeito, devolvemos 
            <span className="text-green-400 font-medium"> 100% do seu dinheiro</span> no prazo da garantia.
          </p>
        </div>

        {/* Urgência sutil */}
        <div className="text-center mt-4 p-3 bg-orange-900/20 border border-orange-500/20 rounded-lg">
          <p className="text-orange-400 text-sm font-medium">
            ⏰ Últimas 12 licenças disponíveis hoje
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
