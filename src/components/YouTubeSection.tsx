
import React from 'react';

import { AspectRatio } from "@/components/ui/aspect-ratio";

const YouTubeSection = () => {
  // Sample YouTube video IDs - replace these with your actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "¿Qué es la Robótica?",
      description: "En este video exploraremos que es la robotica, de manera simple.",
      href: "https://youtu.be/w3-1n2CUf60",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: "9bZkp7q19f0",
      title: "¿Qué es un brazo robótico?, ¿Qué tipos existen?",
      description: "Descubre los diferentes tipos de brazos robóticos y sus aplicaciones en la industria.",
      href: "https://youtu.be/ixOYyol-EWE",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "¿Qué es un agente de IA?",
      description: "Explora el concepto de agentes de inteligencia artificial y su impacto en la tecnología moderna.",
      href: "https://youtu.be/sOLfQvYjSNs",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  return (
    <section id="videos" className="section bg-gradient-to-r from-robot-50 to-tech-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">NUESTROS VIDEOS</span> EN ACCIÓN
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Descubre el potencial de nuestros robots a través de demostraciones, tutoriales y casos de éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video) => (
            <div  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"key={video.id}>
              <div className="relative">
                <AspectRatio ratio={16/9} className="w-full">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </AspectRatio>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://www.youtube.com/channel/UCxxxxxxxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg"
          >
          
            Ver más videos en nuestro canal
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
