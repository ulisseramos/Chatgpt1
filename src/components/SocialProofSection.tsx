
import React from 'react';
import { Star, CheckCircle, Users } from 'lucide-react';

const SocialProofSection = () => {
  const recentPurchases = [
    { name: "Ana S.", location: "São Paulo", time: "2 min" },
    { name: "Carlos M.", location: "Rio de Janeiro", time: "5 min" },
    { name: "Mariana L.", location: "Belo Horizonte", time: "8 min" },
    { name: "Roberto F.", location: "Porto Alegre", time: "12 min" }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "São Paulo, SP",
      text: "Funcionou perfeitamente! Em 10 minutos já estava usando todas as funcionalidades.",
      rating: 5,
      verified: true
    },
    {
      name: "João Oliveira",
      location: "Rio de Janeiro, RJ", 
      text: "Por R$10 consegui uma ferramenta que me economiza horas por dia. Recomendo!",
      rating: 5,
      verified: true
    },
    {
      name: "Amanda Costa",
      location: "Brasília, DF",
      text: "Acesso rápido e fácil. Funciona exatamente como prometido.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Estatísticas */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between text-center">
            <div>
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-blue-400 mr-1" />
                <span className="text-white font-semibold text-sm">2.847+</span>
              </div>
              <p className="text-gray-400 text-xs">Usuários ativos</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-white font-semibold text-sm">4.9/5</span>
              </div>
              <p className="text-gray-400 text-xs">Avaliação média</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-semibold text-sm">Online</span>
              </div>
              <p className="text-gray-400 text-xs">Status do sistema</p>
            </div>
          </div>
        </div>

        {/* Compras recentes */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h3 className="text-white font-medium text-sm mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Aquisições recentes
          </h3>
          <div className="space-y-2">
            {recentPurchases.map((purchase, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                    {purchase.name.split(' ')[0][0]}
                  </div>
                  <span className="text-gray-300">{purchase.name} - {purchase.location}</span>
                </div>
                <span className="text-gray-500">há {purchase.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div className="space-y-3">
          <h3 className="text-white font-medium text-sm text-center mb-4">Feedback dos usuários</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    {testimonial.verified && <CheckCircle className="w-3 h-3 text-green-400" />}
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{testimonial.location}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
