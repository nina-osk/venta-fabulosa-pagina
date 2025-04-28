import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, Shield, Zap, Globe, Smartphone } from 'lucide-react';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gradient-to-br from-robot-500 to-tech-600 p-3 rounded-2xl text-white mb-6 inline-flex">
    {children}
  </div>
);

const Features = () => {
  return (
    <section id="caracteristicas" className="section bg-gray-50 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">CARACTERÍSTICAS TÉCNICAS</span> QUE LE ENCANTARÁN
          </h2>
          <p className="text-lg text-gray-700">
            Nuestros robots combinan tecnología de vanguardia con un diseño intuitivo. 
            Descubra todas las capacidades que ponemos a su disposición.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Connectivity Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Globe size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Conectividad avanzada</h3>
              <p className="text-gray-700">
                Conectividad 4G y WiFi para una comunicación sin interrupciones en cualquier entorno.
              </p>
            </CardContent>
          </Card>
          
          {/* Video Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Video size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Video HD en tiempo real</h3>
              <p className="text-gray-700">
                Videochat con calidad HD para interacciones claras y naturales con sus clientes o equipo.
              </p>
            </CardContent>
          </Card>
          
          {/* Autonomy Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Zap size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Autonomía energética</h3>
              <p className="text-gray-700">
                Batería de larga duración para jornadas completas de trabajo sin interrupciones.
              </p>
            </CardContent>
          </Card>

          {/* Security Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Shield size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Seguridad garantizada</h3>
              <p className="text-gray-700">
                Sistemas de seguridad avanzados para proteger la integridad del robot y de su entorno.
              </p>
            </CardContent>
          </Card>

          {/* Remote Control Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Smartphone size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Control remoto intuitivo</h3>
              <p className="text-gray-700">
                Manejo sencillo desde cualquier dispositivo, con una interfaz amigable y personalizable.
              </p>
            </CardContent>
          </Card>

          {/* User Interaction Feature */}
          <Card className="border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <FeatureIcon>
                <Users size={24} />
              </FeatureIcon>
              <h3 className="text-xl font-bold mb-3">Interacción amigable</h3>
              <p className="text-gray-700">
                Diseñados para interactuar de forma natural, creando experiencias positivas para el usuario.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specs Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Especificaciones <span className="text-gradient">TÉCNICAS</span>
            </h2>
            <p className="text-lg text-gray-700">
              Cada robot ha sido diseñado con los más altos estándares de calidad, 
              integrando componentes de última generación para garantizar rendimiento y fiabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Telepresence Specs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Video className="text-robot-600 w-10 h-10" />
                <h3 className="text-2xl font-bold">Robot de Telepresencia</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Dimensiones</span>
                  <span className="text-gray-600">120cm x 45cm x 45cm</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Peso</span>
                  <span className="text-gray-600">25 kg</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Pantalla</span>
                  <span className="text-gray-600">10.1" Táctil HD</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Cámara</span>
                  <span className="text-gray-600">1080p HD con seguimiento facial</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Batería</span>
                  <span className="text-gray-600">8 horas (uso continuo)</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-800">Conectividad</span>
                  <span className="text-gray-600">4G LTE, Wi-Fi, Bluetooth</span>
                </li>
              </ul>
            </div>
            
            {/* Reception Specs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-tech-600 w-10 h-10" />
                <h3 className="text-2xl font-bold">Robot Recepcionista</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Dimensiones</span>
                  <span className="text-gray-600">110cm x 50cm x 50cm</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Peso</span>
                  <span className="text-gray-600">30 kg</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Pantalla</span>
                  <span className="text-gray-600">15" Táctil HD</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Cámara</span>
                  <span className="text-gray-600">1080p HD con reconocimiento facial</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Batería</span>
                  <span className="text-gray-600">10 horas (uso continuo)</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-800">Conectividad</span>
                  <span className="text-gray-600">Wi-Fi, Bluetooth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
