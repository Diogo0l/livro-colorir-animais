import React from 'react';
import { Lightbulb, Hand, Shield, Smartphone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Estimula a Criatividade",
      description: "Desenvolve a imaginação e expressão artística das crianças",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Hand,
      title: "Melhora Coordenação Motora",
      description: "Fortalece habilidades motoras finas e precisão",
      color: "from-green-400 to-blue-400"
    },
    {
      icon: Shield,
      title: "Atividade Segura",
      description: "Diversão saudável longe das telas digitais",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Smartphone,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família sem distrações",
      color: "from-pink-400 to-red-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Por que escolher nossos desenhos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais que diversão, é desenvolvimento! Cada página foi pensada para estimular o crescimento saudável do seu filho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`bg-gradient-to-r ${benefit.color} p-4 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('offer-card')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Quero esses benefícios para meu filho!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;