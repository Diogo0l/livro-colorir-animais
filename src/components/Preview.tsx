import React from 'react';

const Preview = () => {
  const drawings = [
    { emoji: '🦁', title: 'Leão Corajoso', bg: 'bg-yellow-100' },
    { emoji: '🦋', title: 'Borboleta Mágica', bg: 'bg-purple-100' },
    { emoji: '🌈', title: 'Arco-íris Colorido', bg: 'bg-blue-100' },
    { emoji: '🌸', title: 'Flores Encantadas', bg: 'bg-pink-100' },
    { emoji: '🚂', title: 'Trem da Alegria', bg: 'bg-green-100' },
    { emoji: '🐠', title: 'Peixinho Feliz', bg: 'bg-cyan-100' },
    { emoji: '🎪', title: 'Circo Divertido', bg: 'bg-red-100' },
    { emoji: '🦄', title: 'Unicórnio Mágico', bg: 'bg-indigo-100' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Veja alguns dos nossos desenhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            São <span className="font-bold text-purple-600">20 páginas únicas</span> com temas variados 
            para manter seu filho entretido por horas!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {drawings.map((drawing, index) => (
            <div 
              key={index}
              className={`${drawing.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {drawing.emoji}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {drawing.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
            <p className="text-2xl font-bold text-gray-800 mb-2">
              E mais 12 desenhos incríveis!
            </p>
            <p className="text-gray-600">
              Diversão garantida por semanas 🎨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;