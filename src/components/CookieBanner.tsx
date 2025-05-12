
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Cookie, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha establecido su preferencia
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      // Si no hay preferencia guardada, mostrar el banner
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    toast({
      title: "Cookies aceptadas",
      description: "Has aceptado el uso de cookies en nuestra web.",
      duration: 3000,
    });
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    toast({
      title: "Cookies rechazadas",
      description: "Has rechazado el uso de cookies en nuestra web. Algunas funcionalidades pueden verse limitadas.",
      duration: 3000,
    });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-800 shadow-lg">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-gray-300">
            <Cookie className="h-6 w-6 text-robot-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Uso de Cookies</h3>
              <p className="text-sm">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación.
                Puedes <Link to="/legal#cookies" className="text-robot-500 hover:underline">leer más sobre nuestra política</Link> antes de decidir.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={rejectCookies}
              className="border-gray-700 hover:bg-gray-800 text-gray-300"
            >
              <X className="mr-1" /> Rechazar
            </Button>
            <Button 
              onClick={acceptCookies}
              className="bg-robot-500 hover:bg-robot-600"
            >
              <Check className="mr-1" /> Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
