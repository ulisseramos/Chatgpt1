import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const HeroSection = () => {
  useEffect(() => {
    // Adicionar o script do vídeo
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
    script.setAttribute("data-id", "6837dd88db4fb294cb992888");
    script.async = true;
    document.head.appendChild(script);

    // Adicionar pixel do Facebook
    const fbPixelScript = document.createElement("script");
    fbPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbPixelScript);

    // Adicionar noscript do Facebook pixel
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    return () => {
      // Cleanup do script quando o componente for desmontado
      const existingScript = document.querySelector('script[data-id="6837dd88db4fb294cb992888"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <Logo />
      
      <div className="max-w-md mx-auto text-center space-y-6">
        {/* Badge com disponibilidade */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Restam apenas 9 licenças disponíveis
        </div>

        {/* Título principal */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ChatGPT na</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Melhor Versão</span>
            <br />
            <span className="text-gray-400 text-xl font-normal">( Privado e Exclusivo )</span>
          </h1>
          
          {/* Vídeo */}
          <div className="my-8">
            <div id="ifr_6837dd88db4fb294cb992888_wrapper" style={{ margin: '0 auto', width: '100%' }}>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_6837dd88db4fb294cb992888_aspect">
                <iframe 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://scripts.converteai.net/8d4d4a9d-385b-4da4-962d-620a9257afa1/players/6837dd88db4fb294cb992888/embed.html" 
                  id="ifr_6837dd88db4fb294cb992888" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  referrerPolicy="origin"
                />
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
            Enquanto outros pagam <span className="text-red-400 font-bold line-through">R$100+</span> mensais, 
            você pode ter acesso à versão PRO completa pagando apenas{' '}
            <span className="text-green-400 font-bold text-xl">R$10</span>
          </p>
        </div>

        {/* Botão CTA */}
        <Button 
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-green-500/40 hover:scale-105"
          onClick={scrollToPricing}
        >
          🚀 Quero Acesso Agora
        </Button>

        {/* Garantia */}
        <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
          <span>🔒</span>
          <span>Garantia de 7 dias ou seu dinheiro de volta</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
