
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingShopPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleShopRedirect = () => {
    // Aquí puedes cambiar la URL por la de tu tienda real
    window.open('https://robotsconsultant.net/tienda/', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
    }`}>
      <div className="relative bg-gradient-to-r from-robot-500 to-tech-500 rounded-xl shadow-2xl p-6 max-w-sm animate-float">
        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
          aria-label="Cerrar popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Contenido del popup */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Wrench className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2">
              ¡Personaliza tu Robot!
            </h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Tenemos <span className="font-semibold">repuestos y accesorios</span> para que armes tu propio robot personalizado
            </p>
            
            <Button
              onClick={handleShopRedirect}
              className="bg-white text-robot-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <ShoppingCart className="w-4 h-4" />
              Ver Tienda
            </Button>
          </div>
        </div>

        {/* Indicador visual animado */}
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-tech-400 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-tech-500 rounded-full absolute top-0 left-0"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingShopPopup;
