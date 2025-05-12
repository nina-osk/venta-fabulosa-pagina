import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck } from 'lucide-react';
import { Bot } from 'lucide-react';
import miImagen from '../images/Receptions.png';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-robot-100 text-robot-700 mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" /> 
              <span className="text-xs font-medium">Tecnología de vanguardia con soporte garantizado</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">TRANSFORME SU NEGOCIO</span> CON ROBOTS SOCIALES
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              <Bot className="inline-block mr-2 text-robot-600" />
              <span className="font-medium">BIENVENIDO AL FUTURO DE LA ATENCIÓN AL CLIENTE</span>
            </p>
            
            <p className="text-gray-600 mb-8">
              Descubra cómo nuestros robots sociales pueden revolucionar la experiencia de sus clientes y optimizar sus operaciones. 
              Desde la telepresencia hasta la recepción automatizada, tenemos la solución perfecta para su negocio.
            </p>
            
          </div>
          
          <div className="relative">
            <img 
               src= {miImagen}
              alt="RobotSocial" 
              className="relative z-10 w-full max-w-lg mx-auto" 
            />
            
            <div className="absolute -top-24 -left-24 bg-robot-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 w-80 h-80"></div>
            <div className="absolute bottom-1/2 right-12 bg-tech-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 w-64 h-64"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
