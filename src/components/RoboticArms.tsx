
import React from 'react';
import { Robot, Code, Settings } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoboticArms = () => {
  return (
    <section id="brazos-roboticos" className="section bg-white relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            BRAZOS ROBÓTICOS <span className="text-gradient">INDUSTRIALES</span>
          </h2>
          <p className="text-xl text-gray-700">
            Expertos en asesoramiento, venta y programación de brazos robóticos Universal Robots y KUKA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-robot-100 hover:border-robot-300 transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-robot-100 text-robot-600 flex items-center justify-center mb-6">
                <Robot className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Asesoramiento</h3>
              <p className="text-gray-600 mb-6">
                Consultoría especializada para identificar la mejor solución robótica para su proceso industrial
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>Análisis de necesidades</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>Estudio de viabilidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>ROI detallado</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-tech-600 bg-tech-50 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tech-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Más popular
            </div>
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Venta e Instalación</h3>
              <p className="text-gray-600 mb-6">
                Distribuidores oficiales de Universal Robots y KUKA con servicio completo
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                  <span>Robots colaborativos UR</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                  <span>Robots industriales KUKA</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                  <span>Instalación y puesta en marcha</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-robot-100 hover:border-robot-300 transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-robot-100 text-robot-600 flex items-center justify-center mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Programación</h3>
              <p className="text-gray-600 mb-6">
                Desarrollo de aplicaciones y programación especializada para sus robots
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>Programación UR Script</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>Programación KUKA KRL</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-robot-500 rounded-full"></div>
                  <span>Integración con sistemas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-robot-600 to-tech-600">
            Solicitar Consultoría Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoboticArms;
