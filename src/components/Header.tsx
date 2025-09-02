import React from 'react';
import { Palette } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-pink-400 p-3 rounded-full">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ColorKids</h1>
              <p className="text-xs text-gray-600">Criatividade sem limites</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Desperte a criatividade do seu filho com nossos desenhos para colorir!
            </h2>
          </div>
          
          <button 
            onClick={() => document.getElementById('offer-card')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Compre Agora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;