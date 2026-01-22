import React from 'react';
import { MapPin, Package, LayoutGrid as Layout, BarChart, Rocket, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'On-Site Store Visits',
      icon: MapPin,
      description: 'Regular in-store execution & reporting.'
    },
    {
      title: 'POSM Installation',
      icon: Package,
      description: 'Brand assets perfectly placed.'
    },
    {
      title: 'Planogram Compliance',
      icon: Layout,
      description: 'Shelf placement by standard rules.'
    },
    {
      title: 'Retail Audits',
      icon: BarChart,
      description: 'Data-rich store insights.'
    },
    {
      title: 'Launch Execution',
      icon: Rocket,
      description: 'New product go-to-market support.'
    },
    {
      title: 'Distributor Coordination',
      icon: Network,
      description: 'Seamless brand–distributor flow.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Services
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Comprehensive merchandising solutions designed to maximize your brand's retail impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-vm-bg-light hover:border-vm-accent/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 group-hover:bg-vm-accent/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4 group-hover:text-vm-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;