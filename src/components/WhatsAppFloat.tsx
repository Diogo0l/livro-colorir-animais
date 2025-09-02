import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [showContact, setShowContact] = useState(false);

  const handleWhatsAppClick = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-2 border-green-200 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">WhatsApp</h3>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              Precisa de ajuda? Entre em contato conosco!
            </p>
            
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <p className="text-sm text-gray-600 mb-2">Nosso WhatsApp:</p>
              <p className="font-bold text-green-600 text-lg">
                (88) 99347-5123
              </p>
            </div>
            
            <button
              onClick={() => window.open(`https://wa.me/5588993475123`, '_blank')}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200"
            >
              Abrir WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;