
import React from 'react';
import { X } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    "Limites de mensagens no ChatGPT grátis?",
    "Não conseguir gerar imagens com IA?", 
    "Ter respostas travadas e limitadas?",
    "Não aproveitar o verdadeiro poder da IA?"
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tá cansado de:
          </h2>
        </div>
        
        <div className="space-y-4 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-center space-x-3 text-white">
              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-base">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-white text-xl font-semibold">
            Você não está sozinho.
          </p>
          
          <div className="space-y-4">
            <p className="text-gray-300 text-base leading-relaxed">
              Muita gente ainda nem sabe que existe uma versão{' '}
              <span className="text-purple-400 font-bold">
                MUITO mais potente
              </span>{' '}
              do ChatGPT...
            </p>
            
            <p className="text-gray-300 text-base leading-relaxed">
              E menos ainda que é possível acessar pagando apenas{' '}
              <span className="text-green-400 font-bold text-xl">
                10 reais
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
