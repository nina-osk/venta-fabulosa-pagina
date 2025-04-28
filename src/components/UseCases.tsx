
import React from 'react';
import { Restaurant, PartyPopper } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const UseCases = () => {
  return (
    <div>
      {/* Restaurant Section */}
      <section id="restauracion" className="section bg-white relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-robot-100 text-robot-700 mb-6">
                <Restaurant className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Sector Restauración</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">IDEAL PARA RESTAURACIÓN</span> <br />
                Eleve la experiencia gastronómica
              </h2>
              
              <p className="text-gray-700 mb-8">
                En el competitivo mundo de la restauración, la diferenciación es clave. 
                Nuestros robots aportan ese elemento sorpresa que complementa perfectamente su oferta gastronómica.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-robot-100 p-2 rounded-full text-robot-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Recepción y reservas</h4>
                    <p className="text-gray-600">Reciba a sus comensales con un asistente digital que nunca olvida una reserva</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-robot-100 p-2 rounded-full text-robot-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Comunicación eficiente</h4>
                    <p className="text-gray-600">Mantenga el contacto directo entre chef y sala mediante telepresencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-robot-100 p-2 rounded-full text-robot-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Entretenimiento único</h4>
                    <p className="text-gray-600">Ofrezca entretenimiento entre platos con coreografías robóticas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-robot-100 p-2 rounded-full text-robot-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Marketing social</h4>
                    <p className="text-gray-600">Cree momentos instagrameables que amplificarán su presencia en redes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
                <blockquote className="italic text-gray-700">
                  "Desde que incorporamos los robots sociales, el tiempo medio de estancia ha aumentado un 22% y las reseñas positivas mencionando la experiencia tecnológica se han multiplicado"
                  <footer className="mt-2 font-medium not-italic">- Restaurante La Buena Mesa</footer>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-robot-400 to-robot-600 opacity-10 blur-lg"></div>
              <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Robot en restaurante" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="section bg-gray-50 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-tech-400 to-tech-600 opacity-10 blur-lg"></div>
              <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Robot en evento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-tech-100 text-tech-700 mb-6">
                <PartyPopper className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Eventos Especiales</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">REVOLUCIONE SUS EVENTOS</span> <br />
                Experiencias inolvidables que todos comentarán
              </h2>
              
              <p className="text-gray-700 mb-8">
                Destaque entre la competencia ofreciendo innovación en cada celebración. 
                Nuestros robots son el complemento perfecto para bodas, congresos, ferias y todo tipo de acontecimientos.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-tech-100 p-2 w-12 h-12 rounded-full text-tech-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Registro automático</h3>
                    <p className="text-gray-600 text-sm">Recepción de invitados con registro automático y gestión de asistencia.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-tech-100 p-2 w-12 h-12 rounded-full text-tech-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Fotomatón móvil</h3>
                    <p className="text-gray-600 text-sm">Interactúa con los asistentes capturando momentos especiales del evento.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-tech-100 p-2 w-12 h-12 rounded-full text-tech-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Animación</h3>
                    <p className="text-gray-600 text-sm">Entretenimiento que rompe el hielo y crea ambiente entre los asistentes.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-tech-100 p-2 w-12 h-12 rounded-full text-tech-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Presentaciones remotas</h3>
                    <p className="text-gray-600 text-sm">Presencia virtual de ponentes desde cualquier lugar del mundo.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-5 bg-purple-50 border border-purple-100 rounded-lg">
                <blockquote className="italic text-gray-700">
                  "El robot fue la estrella de nuestra feria. Conseguimos un 45% más de leads que el año anterior gracias al poder de atracción que ejercía sobre los visitantes"
                  <footer className="mt-2 font-medium not-italic">- Organizador de ExpoBodas 2024</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
