import React from 'react';
import { CheckCircle, Users, BarChart3, Shield } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Users, text: 'Professional merchandisers' },
    { icon: BarChart3, text: 'Reliable reporting' },
    { icon: Shield, text: '100% POSM compliance' }
  ];

  return (
    <section id="about" className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
                Who We Are
              </h2>
              <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed mb-8">
                Vertex Merchandising drives in-store excellence for big brands. 
                From POSM deployment to audit reports, we make sure your products{' '}
                <span className="font-400 text-vm-accent">win visibility</span> and boost revenue.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-vm-bg-light transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-vm-accent/10 rounded-full flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-vm-accent" />
                  </div>
                  <span className="text-lg font-smooch font-300 text-vm-primary group-hover:text-vm-dark transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vm-dark/20 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-vm-bg-light">
              <div className="text-center">
                <div className="text-3xl font-smooch font-200 text-vm-accent mb-1">500+</div>
                <div className="text-sm font-smooch font-300 text-vm-primary">Stores Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;