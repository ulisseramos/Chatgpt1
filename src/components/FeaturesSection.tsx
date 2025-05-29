
import React from 'react';
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    "Acesso ao GPT-4-Turbo (mais rápido, mais inteligente, mais completo)",
    "Geração de imagens com inteligência artificial (incrível pra conteúdo, posts, arte, etc)",
    "Criação de planilhas, eBooks, códigos, legendas, ideias de negócio, conteúdos prontos e muito mais",
    "Respostas mais completas e personalizadas",
    "Tudo isso direto no seu navegador ou celular"
  ];

  const benefits = [
    { text: "Sem pagar mais de 100 reais em um mês de acesso", type: "negative" },
    { text: "Sem métodos falsos e complicados", type: "negative" },
    { text: "Apenas R$10 pra ter acesso agora", type: "positive" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Aqui está o que você vai desbloquear com essa versão PRO:
          </h2>
        </div>

        <div className="space-y-3 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-white text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-green-400 mb-6">E o melhor?</h3>
          
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-3 ${
                  benefit.type === 'negative' ? 'text-red-400' : 'text-green-400 font-bold'
                }`}
              >
                <span className="text-lg">
                  {benefit.type === 'negative' ? '🚫' : '💸'}
                </span>
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
