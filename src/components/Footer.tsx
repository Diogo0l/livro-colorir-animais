import React from 'react';
import { Shield, CreditCard, Smartphone, DollarSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-green-500 text-white p-8 rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">
              🛡️ Garantia de Satisfação de 30 dias
            </h3>
            <p className="text-lg">
              Se você não ficar 100% satisfeito, devolvemos seu dinheiro sem perguntas!
            </p>
          </div>
          
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-center">
              💳 Meios de Pagamento Aceitos
            </h4>
            
            <div className="flex justify-center gap-4">
              <div className="flex items-center justify-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Cartão</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 bg-green-50 p-3 rounded-lg">
                <Smartphone className="h-5 w-5 text-green-600" />
                <span className="font-medium">PIX</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 bg-purple-50 p-3 rounded-lg">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Seguro</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => window.open('https://pay.kiwify.com.br/BaaEZHt', '_blank')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-16 rounded-full text-2xl transform transition-all duration-200 hover:scale-110 shadow-2xl mb-8 animate-pulse hover:animate-none"
          >
            🎨 Garantir Agora por Apenas R$ 19,90
          </button>
          
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 mb-4">
              © 2025 ColorKids - Todos os direitos reservados
            </p>
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              Este produto é um material digital para impressão doméstica. Após a confirmação do pagamento, 
              você receberá um email com o link para download. Suporte disponível em até 24h.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;