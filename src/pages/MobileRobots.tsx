import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Camera, MapPin, Shield, Zap, Settings } from 'lucide-react';

const MobileRobots = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-pink-50 pt-32 pb-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Robots Móviles para 
              <span className="text-blue-600"> Logística</span> y 
              <span className="text-pink-500"> Videovigilancia</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Soluciones automatizadas avanzadas para optimizar operaciones logísticas y sistemas de seguridad con tecnología robótica de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Truck className="mr-2 h-5 w-5" />
                Ver Robots Logísticos
              </Button>
              <Button size="lg" variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
                <Camera className="mr-2 h-5 w-5" />
                Ver Robots de Vigilancia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistica" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robots Móviles para Logística
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatiza tus operaciones de almacén y distribución con robots móviles inteligentes que optimizan la eficiencia y reducen costos operativos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Robot logístico en almacén" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Principales</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Navegación Autónoma</h4>
                    <p className="text-gray-600">Sistema SLAM avanzado para navegación precisa en entornos complejos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Capacidad de Carga</h4>
                    <p className="text-gray-600">Desde 50kg hasta 1000kg según el modelo y aplicación</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Autonomía Extendida</h4>
                    <p className="text-gray-600">Hasta 12 horas de operación continua con carga automática</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  AGV Básico
                </CardTitle>
                <CardDescription>Para almacenes pequeños y medianos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Capacidad: 50-200kg</li>
                  <li>• Velocidad: 1.5 m/s</li>
                  <li>• Autonomía: 8 horas</li>
                  <li>• Navegación por líneas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  AMR Avanzado
                </CardTitle>
                <CardDescription>Navegación autónoma inteligente</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Capacidad: 200-500kg</li>
                  <li>• Velocidad: 2 m/s</li>
                  <li>• Autonomía: 10 horas</li>
                  <li>• SLAM + sensores LiDAR</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  Robot Industrial
                </CardTitle>
                <CardDescription>Para operaciones pesadas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Capacidad: 500-1000kg</li>
                  <li>• Velocidad: 1.8 m/s</li>
                  <li>• Autonomía: 12 horas</li>
                  <li>• IA avanzada + Fleet Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Surveillance Section */}
      <section id="videovigilancia" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robots de Videovigilancia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguridad 24/7 con robots móviles equipados con sistemas de videovigilancia avanzados, detección de intrusos y respuesta automática.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Capacidades de Seguridad</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Camera className="h-6 w-6 text-pink-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cámaras 4K</h4>
                    <p className="text-gray-600">Visión nocturna, zoom óptico 30x y detección térmica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-pink-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IA de Detección</h4>
                    <p className="text-gray-600">Reconocimiento facial, detección de objetos y comportamientos anómalos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-6 w-6 text-pink-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Patrullaje Automático</h4>
                    <p className="text-gray-600">Rutas programables con respuesta automática a alertas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Robot de vigilancia con cámara" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-pink-600" />
                  Patrol Bot
                </CardTitle>
                <CardDescription>Patrullaje básico interior/exterior</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cámara Full HD</li>
                  <li>• Visión nocturna</li>
                  <li>• 6 horas autonomía</li>
                  <li>• Alertas en tiempo real</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-pink-600" />
                  Security Pro
                </CardTitle>
                <CardDescription>Vigilancia avanzada con IA</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cámaras 4K duales</li>
                  <li>• IA de reconocimiento</li>
                  <li>• 10 horas autonomía</li>
                  <li>• Integración con sistemas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-pink-600" />
                  Guardian Elite
                </CardTitle>
                <CardDescription>Máxima seguridad industrial</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sistema multicámara 360°</li>
                  <li>• Detección térmica</li>
                  <li>• 12 horas autonomía</li>
                  <li>• Respuesta automática</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tus Operaciones?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contacta con nuestros expertos para una consulta personalizada y descubre cómo nuestros robots móviles pueden transformar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Solicitar Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Descargar Catálogo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileRobots;
