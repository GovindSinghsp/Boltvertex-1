import React from 'react';
import { ShoppingCart, Smartphone, Shirt, Coffee, Car, Heart } from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    {
      icon: ShoppingCart,
      name: 'FMCG',
      description: 'Fast-moving consumer goods with high-volume execution',
      projects: '150+ Projects'
    },
    {
      icon: Smartphone,
      name: 'Electronics',
      description: 'Tech products requiring specialized display solutions',
      projects: '80+ Projects'
    },
    {
      icon: Shirt,
      name: 'Fashion & Apparel',
      description: 'Seasonal campaigns and brand positioning',
      projects: '60+ Projects'
    },
    {
      icon: Coffee,
      name: 'Food & Beverage',
      description: 'Product launches and promotional campaigns',
      projects: '90+ Projects'
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Accessories and aftermarket products',
      projects: '40+ Projects'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Pharmaceutical and wellness products',
      projects: '30+ Projects'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Industry Expertise
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Deep domain knowledge across diverse industries with proven track record
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl group-hover:bg-vm-accent/20 transition-colors duration-300">
                  <industry.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-smooch font-400 text-vm-accent bg-vm-accent/10 px-3 py-1 rounded-full">
                  {industry.projects}
                </span>
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                {industry.name}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;