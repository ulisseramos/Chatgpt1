
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como recebo o acesso após a compra?",
      answer: "Após confirmar o pagamento, você receberá imediatamente no seu email as instruções de acesso com login e senha para acessar o ChatGPT Plus."
    },
    {
      question: "Acesso é seguro mesmo?",
      answer: "Sim! Utilizamos contas oficiais do ChatGPT Plus compartilhadas de forma segura. Seus dados ficam protegidos e você tem acesso a todos os recursos premium."
    },
    {
      question: "O Canva PRO vem com o plano de R$10?",
      answer: "Não, o Canva PRO está incluído apenas no plano Premium de R$27. O plano de R$10 inclui apenas o acesso ao ChatGPT Plus."
    },
    {
      question: "Posso renovar a oferta de R$10 depois de 1 mês?",
      answer: "Sim! Você pode renovar mensalmente pelo mesmo valor de R$10, garantindo acesso contínuo ao ChatGPT Plus."
    },
    {
      question: "Funciona no celular e no computador?",
      answer: "Perfeitamente! O acesso funciona em qualquer dispositivo - celular, tablet, computador - através do navegador ou aplicativo oficial do ChatGPT."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4"
            >
              <AccordionTrigger className="text-white hover:text-green-400 transition-colors text-left text-sm py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
