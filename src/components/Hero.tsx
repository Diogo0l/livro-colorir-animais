import React from 'react';
import { Star, Download, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                20 Desenhos
              </span>
              <br />
              para Colorir
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold text-blue-600">20 páginas únicas</span> para imprimir e colorir!
              <br />
              Atividade educativa e divertida para crianças de todas as idades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('offer-card')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Baixar Agora - R$ 19,90</span>
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5 text-red-400" />
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-yellow-100 p-4 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🦁</span>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🌈</span>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🦋</span>
                  </div>
                  <div className="bg-pink-100 p-4 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🌸</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  20 Desenhos Incríveis
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Para imprimir e colorir quantas vezes quiser!
                </p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
              50% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;