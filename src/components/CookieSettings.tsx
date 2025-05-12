
import React from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const CookieSettings = () => {
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    toast({
      title: "Cookies aceptadas",
      description: "Has aceptado el uso de cookies en nuestra web.",
      duration: 3000,
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    toast({
      title: "Cookies rechazadas",
      description: "Has rechazado el uso de cookies en nuestra web. Algunas funcionalidades pueden verse limitadas.",
      duration: 3000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-400 text-xs hover:text-white transition-colors">
          <Settings className="h-3 w-3" />
          Configurar cookies
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configuración de cookies</DialogTitle>
          <DialogDescription>
            Puedes modificar tus preferencias sobre el uso de cookies en nuestra web en cualquier momento.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm text-gray-500">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación.
            Las cookies son necesarias para el funcionamiento del sitio, mientras que otras nos permiten analizar y personalizar tu experiencia.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleReject}>
            Rechazar todas
          </Button>
          <Button onClick={handleAccept}>
            Aceptar todas
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
