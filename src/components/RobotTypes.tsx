
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { video, users, star } from 'lucide-react';

const RobotTypes = () => {
  return (
    <section id="soluciones" className="section bg-white relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">SOLUCIONES ROBÓTICAS</span> PARA RESTAURACIÓN Y EVENTOS
          </h2>
          <p className="text-lg text-gray-700">
            ¿Imagina tener un equipo que nunca se cansa, siempre sonríe y está disponible 24/7? 
            Nuestros robots sociales revolucionarán su negocio, creando experiencias memorables mientras optimizan sus operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Telepresence Robot */}
          <Card className="border-2 border-transparent hover:border-robot-200 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-robot-500 to-robot-600 text-white relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <video className="text-white w-20 h-20" />
              <CardTitle className="text-2xl relative z-10">Robots de Telepresencia</CardTitle>
              <CardDescription className="text-white/90 relative z-10">Conectando personas, eliminando distancias</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                PadBot transforma la forma en que se comunica con su equipo y clientes. 
                Con conectividad 4G y WiFi, puede estar presente en cualquier momento y lugar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-robot-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Supervisión remota en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-robot-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Atención personalizada a distancia</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-robot-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Conectividad 4G para comunicación sin interrupciones</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Reception Robot */}
          <Card className="border-2 border-transparent hover:border-robot-200 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-tech-500 to-tech-600 text-white relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <users className="text-white w-20 h-20" />
              <CardTitle className="text-2xl relative z-10">Robots Recepcionistas</CardTitle>
              <CardDescription className="text-white/90 relative z-10">Su equipo de bienvenida incansable</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                Transforme su recepción con asistentes digitales que cautivan desde el primer instante. 
                Nuestros robots recepcionistas son la combinación perfecta entre funcionalidad y entretenimiento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-tech-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Recibimiento perfecto 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-tech-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Gestión eficiente de reservas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-tech-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Reconocimiento facial para atención personalizada</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Event Robot */}
          <Card className="border-2 border-transparent hover:border-robot-200 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <star className="text-white w-20 h-20" />
              <CardTitle className="text-2xl relative z-10">Robots para Eventos</CardTitle>
              <CardDescription className="text-white/90 relative z-10">Experiencias inolvidables que todos comentarán</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                Destaque entre la competencia ofreciendo innovación en cada celebración. 
                Nuestros robots son el complemento perfecto para bodas, congresos, ferias y todo tipo de acontecimientos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-purple-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Recepción de invitados con registro automático</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-purple-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Fotomatón móvil que interactúa con los asistentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-purple-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Animación y entretenimiento que rompe el hielo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RobotTypes;
