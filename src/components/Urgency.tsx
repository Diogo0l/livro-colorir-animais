import React, { useState, useEffect } from 'react';
import { Clock, Users, Zap } from 'lucide-react';

const Urgency = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-pink-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              ⏰ Oferta termina em:
            </h2>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-br from-red-400 to-red-600 text-white p-4 rounded-2xl min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm">HORAS</div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded-2xl min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm">MINUTOS</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-4 rounded-2xl min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm">SEGUNDOS</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3 bg-green-100 p-4 rounded-xl">
              <Users className="h-6 w-6 text-green-600" />
              <span className="font-semibold text-green-800">
                Mais de 1.200 mães já baixaram!
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-purple-100 p-4 rounded-xl">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="font-semibold text-purple-800">
                Download instantâneo!
              </span>
            </div>
          </div>
          
          <button 
            onClick={() => window.open('https://pay.kiwify.com.br/BaaEZHt', '_blank')}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-full text-xl transform transition-all duration-200 hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
          >
            🚀 Aproveitar Desconto Agora - R$ 19,90
          </button>
          
          <p className="text-gray-500 mt-4 text-sm">
            ⚡ Após a confirmação do pagamento você receberá o link para download por email
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;