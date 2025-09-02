import React from 'react';
import { Download, Clock, Shield } from 'lucide-react';

const OfferCard = () => {
  return (
    <section id="offer-card" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-1 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-bold animate-bounce">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>50% OFF por tempo limitado!</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oferta Especial de Lançamento!
              </h2>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-2xl text-gray-400 line-through">
                  De R$ 39,90
                </span>
                <span className="text-5xl font-bold text-green-600">
                  R$ 19,90
                </span>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                <span className="font-semibold text-purple-600">Promoção exclusiva!</span>
                <br />
                Baixe agora e comece a colorir hoje mesmo. Material digital para download imediato.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <Download className="h-5 w-5 text-green-500" />
                  <span>Download instantâneo após a compra</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://pay.kiwify.com.br/BaaEZHt', '_blank')}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-6 px-12 rounded-full text-xl transform transition-all duration-200 hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
              >
                🎨 Garantir meu Livro agora - R$ 19,90
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                💳 Aceitamos todos os cartões e Pix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;