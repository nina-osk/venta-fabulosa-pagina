
import React from 'react';
import { Puzzle, Wrench } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CustomizedRobots = () => {
  return (
    <section id="robots-personalizados" className="section bg-gray-50 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            TU VISIÓN, NUESTRA TECNOLOGÍA: <span className="text-gradient">ROBOTS PERSONALIZADOS</span>
          </h2>
          <p className="text-lg text-gray-700">
            ¿Necesitas una solución robótica específica? Desarrollamos robots a medida que se adaptan 
            perfectamente a los requerimientos únicos de tu negocio o evento. Desde la apariencia física 
            hasta las funcionalidades avanzadas, creamos exactamente lo que necesitas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-transparent hover:border-robot-200 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-robot-400 to-tech-500 text-white flex items-center justify-center">
                  <Puzzle className="w-7 h-7" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Diseño Personalizado</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-robot-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Diseño exclusivo adaptado a tu marca</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-robot-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Personalización estética completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-robot-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Integración perfecta con tu identidad corporativa</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-transparent hover:border-tech-200 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-tech-400 to-purple-500 text-white flex items-center justify-center">
                  <Wrench className="w-7 h-7" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Funcionalidad a Medida</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-tech-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Funcionalidades específicas para tu sector</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-tech-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Desarrollo ágil con prototipos funcionales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-tech-500 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Soporte técnico especializado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-robot-50 to-tech-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Transforma tu Negocio con la Robótica Avanzada</h3>
            <p className="text-lg text-gray-700 mb-8">
              Alquila por días, semanas o adquiere tu propio robot. Solicita una demostración personalizada 
              y descubre cómo nuestros robots pueden revolucionar tu empresa.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-robot-600 to-tech-600 hover:opacity-90 transition-all">
              Solicitar Demostración Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedRobots;
