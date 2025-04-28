
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", 
      isScrolled ? "bg-white shadow-md py-2" : "py-4 bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gradient">RobotSocial</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#soluciones" className="text-gray-700 hover:text-robot-600 font-medium">Soluciones</a>
          <a href="#restauracion" className="text-gray-700 hover:text-robot-600 font-medium">Restauración</a>
          <a href="#eventos" className="text-gray-700 hover:text-robot-600 font-medium">Eventos</a>
          <a href="#contacto" className="text-gray-700 hover:text-robot-600 font-medium">Contacto</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-robot-600 text-robot-600 hover:bg-robot-50">
            Catálogo
          </Button>
          <Button className="bg-gradient-to-r from-robot-600 to-tech-600 text-white">
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-4">
            <a href="#soluciones" className="text-gray-700 hover:text-robot-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Soluciones</a>
            <a href="#restauracion" className="text-gray-700 hover:text-robot-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Restauración</a>
            <a href="#eventos" className="text-gray-700 hover:text-robot-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
            <a href="#contacto" className="text-gray-700 hover:text-robot-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            <Button variant="outline" className="border-robot-600 text-robot-600 w-full hover:bg-robot-50">
              Catálogo
            </Button>
            <Button className="bg-gradient-to-r from-robot-600 to-tech-600 text-white w-full">
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
