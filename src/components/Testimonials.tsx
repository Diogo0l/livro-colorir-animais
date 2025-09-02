import React from 'react';
import { Star, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo, SP",
      text: "Minha filha amou! Ela coloriu todos os desenhos em 2 dias e já quer mais. Super recomendo!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Silva",
      location: "Rio de Janeiro, RJ", 
      text: "Excelente qualidade! Os desenhos são lindos e bem detalhados. Meu filho de 6 anos adorou.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mariana Costa",
      location: "Belo Horizonte, MG",
      text: "Melhor investimento! Por menos de R$ 20 consegui entreter meus filhos por semanas inteiras.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      location: "Brasília, DF",
      text: "Material de qualidade profissional! Minha esposa é arte-educadora e aprovou totalmente.",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que os pais estão falando?
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5 de satisfação</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mt-4 text-pink-500">
                <Heart className="h-4 w-4 mr-1 fill-current" />
                <span className="text-sm font-medium">Família satisfeita</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl inline-block">
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Junte-se a mais de 1.200 famílias felizes! 🎉
            </p>
            <p className="text-gray-600">
              Seu filho também merece essa diversão criativa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;