import React from 'react';
import { Package, MapPin, BarChart3 } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-smooch font-100 mb-6">
            Our Services
          </h1>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive merchandising solutions designed to maximize your brand's retail impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Package className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">POSM Solutions</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Complete point-of-sale material management</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <MapPin className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Store Execution</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Professional on-ground implementation</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <BarChart3 className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Analytics & Reporting</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Data-driven insights and compliance tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;