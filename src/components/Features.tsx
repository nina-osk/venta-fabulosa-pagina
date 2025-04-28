
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { video, users } from 'lucide-react';

const Features = () => {
  return (
    <section className="section bg-gray-50 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CARACTERÍSTICAS Y <span className="text-gradient">VENTAJAS</span> QUE MARCAN LA DIFERENCIA
          </h2>
          <p className="text-lg text-gray-700">
            Nuestros robots sociales están diseñados para optimizar sus operaciones, 
            mejorar la experiencia del cliente y destacar su negocio sobre la competencia.
          </p>
        </div>

        <Tabs defaultValue="telepresence" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-10">
            <TabsTrigger value="telepresence">Telepresencia</TabsTrigger>
            <TabsTrigger value="reception">Recepcionista</TabsTrigger>
          </TabsList>

          <TabsContent value="telepresence" className="animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <video className="text-robot-600" size={28} />
                  <span>Robots de Telepresencia: Conectando Personas</span>
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3">Ventajas que Marcan la Diferencia</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-robot-100 text-robot-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Supervisión remota en tiempo real</span>
                          <span className="text-gray-600">Gestione su negocio desde cualquier ubicación, manteniendo control total sobre sus operaciones.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-robot-100 text-robot-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Atención personalizada</span>
                          <span className="text-gray-600">Ofrezca consultas especializadas o asistencia VIP sin importar dónde se encuentre físicamente.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-robot-100 text-robot-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Reuniones más eficientes</span>
                          <span className="text-gray-600">Participe en encuentros con proveedores o formaciones de personal sin necesidad de desplazamientos.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-robot-100 text-robot-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Experiencia cliente única</span>
                          <span className="text-gray-600">Sorprenda a sus invitados con interacciones innovadoras que recordarán.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3">Características Técnicas</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-robot-600"></div>
                        <span>Conectividad 4G</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-robot-600"></div>
                        <span>Video chat HD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-robot-600"></div>
                        <span>Auto-carga inteligente</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-robot-600"></div>
                        <span>Navegación autónoma</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-robot-600"></div>
                        <span>Diseño elegante</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-robot-400 to-robot-600 opacity-20 blur-lg"></div>
                  <div className="relative h-full w-full rounded-xl bg-white shadow-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Robot de telepresencia" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reception" className="animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-tech-400 to-tech-600 opacity-20 blur-lg"></div>
                  <div className="relative h-full w-full rounded-xl bg-white shadow-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Robot recepcionista" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <users className="text-tech-600" size={28} />
                  <span>Robots Recepcionistas: Primera Impresión Perfecta</span>
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3">Beneficios que Transformarán su Negocio</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-tech-100 text-tech-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Recibimiento perfecto 24/7</span>
                          <span className="text-gray-600">Dé la bienvenida a cada cliente con la misma energía y entusiasmo, sea la hora que sea.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-tech-100 text-tech-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Gestión eficiente de reservas</span>
                          <span className="text-gray-600">Organice llegadas, confirme reservas y gestione tiempos de espera automáticamente.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-tech-100 text-tech-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Experiencia memorable</span>
                          <span className="text-gray-600">Deje una impresión duradera con una tecnología que sorprende y encanta.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-tech-100 text-tech-600 p-2 rounded-full flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold block">Atracción de público</span>
                          <span className="text-gray-600">Convierta su establecimiento en un punto de interés gracias a la novedad tecnológica.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3">Características Diferenciales</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-600"></div>
                        <span>Reconocimiento facial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-600"></div>
                        <span>Sistema de baile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-600"></div>
                        <span>Personalización de marca</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-600"></div>
                        <span>Múltiples idiomas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-600"></div>
                        <span>Integración con CRM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-robot-400/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-tech-400/5 filter blur-3xl"></div>
    </section>
  );
};

export default Features;
