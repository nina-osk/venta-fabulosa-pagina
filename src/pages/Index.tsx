
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import RobotTypes from '@/components/RobotTypes';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import VirtualReceptionist from '@/components/VirtualReceptionist';
import RoboticArms from '@/components/RoboticArms';
import CustomizedRobots from '@/components/CustomizedRobots';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <RobotTypes />
        <Features />
        <UseCases />
        <VirtualReceptionist />
        <RoboticArms />
        <CustomizedRobots />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
