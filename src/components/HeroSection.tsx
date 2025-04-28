
import React from 'react';
import { Button } from '@/components/ui/button';
import { robot } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              TRANSFORME SU NEGOCIO CON <span className="text-gradient">ROBOTS SOCIALES</span>
            </h1>
            <p className="text-xl text-gray-700 md:pr-10">
              Soluciones robóticas innovadoras para restauración y eventos. 
              Bienvenido al futuro de la atención al cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg py-6 px-8 flex items-center gap-2">
                <robot size={20} />
                <span>Solicitar Demo Gratis</span>
              </Button>
              <Button variant="outline" className="btn-outline text-lg py-6 px-8">
                Ver Catálogo
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="relative w-full h-[400px] animate-float">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-tech-300/20 filter blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px]">
                <img 
                  src="/placeholder.svg"
                  alt="Robot social para negocios" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/10 rounded-full filter blur-md"></div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-robot-400/10 filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-tech-400/10 filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
