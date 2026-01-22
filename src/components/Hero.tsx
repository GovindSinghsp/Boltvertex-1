import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vm-dark via-vm-primary to-vm-primary"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-vm-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-vm-soft/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-smooch font-100 text-white mb-6 leading-tight">
            Elevating Your Brand at the
            <span className="block text-vm-accent">Point of Sale</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl font-smooch font-300 text-vm-bg-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Premium merchandising execution & retail compliance services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3">
              Get A Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-white text-white hover:bg-white hover:text-vm-dark px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;