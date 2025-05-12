
import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EcommerceSection = () => {
  return (
    <section id="ecommerce" className="section bg-gradient-to-r from-robot-50 to-tech-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">REPUESTOS Y MEJORAS</span> PARA TUS EQUIPOS
          </h2>
          <p className="text-lg text-gray-700">
            Visita nuestra tienda online donde encontrarás todos los repuestos originales
            y actualizaciones para mantener tus robots funcionando con el máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-robot-100 text-robot-600 flex items-center justify-center mb-4">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Repuestos Originales</h3>
            <p className="text-gray-600">
              Componentes certificados que garantizan el funcionamiento óptimo y seguro de tus robots.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Actualizaciones</h3>
            <p className="text-gray-600">
              Mejora las capacidades de tu robot con nuestras actualizaciones de hardware y software.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-robot-100 to-tech-100 text-purple-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Garantía Extendida</h3>
            <p className="text-gray-600">
              Extiende la vida útil de tus robots con nuestros planes de mantenimiento y garantía.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-gradient-to-r from-tech-600 to-robot-600 hover:opacity-90 transition-all gap-2">
            <ShoppingCart className="w-5 h-5" />
            Visitar Nuestra Tienda Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
