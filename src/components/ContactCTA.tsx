
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { supabase } from "../lib/supabase";// Adjust the import path as necessary



const ContactCTA = () => {
  const [task, setTask] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Function to insert data into Supabase

const newForm = async () => {
    const { error } = await supabase
      .from('Leads')
      .insert([
        { name: task.name, email: task.email, phone:task.phone, message: task.message }
      ]);
    
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', task);
    }
  }
const handleChange = (e) => {
  setTask({ 
    ...task, 
    [e.target.name]: e.target.value 
  });
};
  const handleSubmit = (e) => {

    e.preventDefault();   
    newForm();

  };



  return (
    <section id="contacto" className="section bg-gradient-to-b from-white to-blue-50 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿LISTO PARA <span className="text-gradient">REVOLUCIONAR</span> SU NEGOCIO?
          </h2>
          <p className="text-lg text-gray-700">
            No espere más para incorporar el futuro a su establecimiento. 
            Nuestros robots sociales están disponibles en diferentes modalidades adaptadas a sus necesidades.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-robot-600 to-tech-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">SOLICITE UNA DEMOSTRACIÓN GRATUITA</h3>
                  <p className="mb-6">
                    Compruebe en persona el impacto de nuestros robots sociales. Le visitamos sin compromiso para mostrarle cómo pueden transformar su negocio.
                  </p>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span>Demostración en su ubicación a su conveniencia</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span>Presentación personalizada según necesidades</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-white/20 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <span>Respuesta a todas sus preguntas por expertos</span>
                    </div>
                  </div>
                </div>
                {/* Form Section */}  
        
                <div className="bg-white p-8">
                  <form  onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                      <Input name="name" onChange={handleChange} placeholder="Name" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input name="email" onChange={handleChange} placeholder="Email" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <Input name="phone" onChange={handleChange} placeholder="Phone" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                      <Textarea name="message" onChange={handleChange} placeholder="Message" className="w-full" />
                    </div>
                    <Button type="submit" className="bg-gradient-to-r from-robot-600 to-tech-600 text-white hover:shadow-lg w-full">
                      Solicitar Demo Gratis
                    </Button>
  
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
