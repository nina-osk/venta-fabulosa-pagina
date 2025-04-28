
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Database, Users, Check, Shield } from 'lucide-react';

const ModuleCard = ({ icon: Icon, title, features }: { icon: any, title: string, features: string[] }) => (
  <Card className="border-0 hover:shadow-xl transition-all duration-300">
    <CardContent className="pt-6">
      <div className="bg-gradient-to-br from-robot-500 to-tech-600 p-3 rounded-2xl text-white mb-6 inline-flex">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="text-robot-600 mt-1 flex-shrink-0" size={16} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const BenefitSection = ({ title, stats }: { title: string, stats: { value: string, description: string }[] }) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-3">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="text-robot-600 font-bold text-lg">{stat.value}</div>
          <div className="text-gray-700">{stat.description}</div>
        </div>
      ))}
    </div>
  </div>
);

const VirtualReceptionist = () => {
  const modules = [
    {
      icon: Users,
      title: "RECEPCIONISTA ROBÓTICA CON IA",
      features: [
        "Recibimiento personalizado para cada visitante",
        "Reconocimiento facial para clientes recurrentes",
        "Múltiples idiomas disponibles instantáneamente",
        "Navegación autónoma por sus instalaciones",
        "Telepresencia para comunicación con personal remoto",
        "Atención ininterrumpida 24 horas al día"
      ]
    },
    {
      icon: Calendar,
      title: "SISTEMA DE AGENDAMIENTO INTELIGENTE",
      features: [
        "Gestión automática de citas sin intervención humana",
        "Algoritmos predictivos para optimizar horarios",
        "Recordatorios automáticos a clientes",
        "Redistribución inteligente en caso de cancelaciones",
        "Integración con calendarios de todo su equipo",
        "Analytics avanzados sobre patrones de reservas"
      ]
    },
    {
      icon: Database,
      title: "MÓDULO DE CONTROL CENTRALIZADO (MCP)",
      features: [
        "Dashboard en tiempo real de todas las operaciones",
        "Control centralizado de robots y sistemas digitales",
        "Alertas y notificaciones configurables",
        "Reportes detallados de actividad y rendimiento",
        "Integración con CRM y otras herramientas empresariales",
        "Acceso desde cualquier dispositivo"
      ]
    }
  ];

  const businessBenefits = [
    { value: "42%", description: "reducción en costes operativos de recepción" },
    { value: "37%", description: "incremento en la eficiencia de agendamiento" },
    { value: "28%", description: "disminución en citas perdidas o canceladas" },
    { value: "35%", description: "optimización en la distribución de recursos humanos" },
    { value: "47%", description: "mejora en la captura de datos de clientes" }
  ];

  const customerBenefits = [
    { value: "63%", description: "reducción en tiempos de espera" },
    { value: "41%", description: "mejora en satisfacción según encuestas" },
    { value: "24/7", description: "disponibilidad para consultas y reservas" },
    { value: "100%", description: "experiencia personalizada desde el primer contacto" }
  ];

  return (
    <section id="virtual-receptionist" className="section bg-white relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            RECEPCIONISTA VIRTUAL & <span className="text-gradient">AGENDAMIENTO INTELIGENTE</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Revoluciona la atención al cliente con nuestra solución de IA y robótica
          </p>
          <div className="bg-gradient-to-r from-robot-50 to-tech-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-4">TRANSFORME SU RECEPCIÓN CON INTELIGENCIA ARTIFICIAL</h3>
            <p className="text-gray-700 mb-6">
              Imagine un recepcionista que nunca se cansa, nunca se enferma y está disponible 24/7/365
            </p>
            <Button size="lg" className="bg-gradient-to-r from-robot-600 to-tech-600">
              SOLICITAR DEMO GRATUITA
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">¿QUÉ OFRECEMOS?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <ModuleCard key={index} {...module} />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-robot-50 to-tech-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">BENEFICIOS COMPROBADOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitSection title="PARA SU NEGOCIO" stats={businessBenefits} />
              <BenefitSection title="PARA SUS CLIENTES" stats={customerBenefits} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualReceptionist;
