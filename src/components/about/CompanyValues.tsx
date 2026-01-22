import React from 'react';
import { Heart, Eye, Zap, Shield } from 'lucide-react';

const CompanyValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Every decision we make is guided by our commitment to client success and satisfaction.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and honest reporting build trust and long-term partnerships.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving our methods and technology to deliver superior results.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent execution and dependable service delivery across all touchpoints.'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Values
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            The principles that guide our actions and define our culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-vm-accent/10 rounded-full mb-6 mx-auto group-hover:bg-vm-accent/20 transition-colors duration-300">
                <value.icon className="w-10 h-10 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4 group-hover:text-vm-accent transition-colors duration-300">
                {value.title}
              </h3>
              <p className="font-smooch font-300 text-vm-primary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;