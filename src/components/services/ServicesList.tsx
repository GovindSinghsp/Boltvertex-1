import React from 'react';
import { MapPin, Package, LayoutGrid, BarChart, Rocket, Network, Clock, Shield } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      title: 'On-Site Store Visits',
      icon: MapPin,
      description: 'Regular in-store execution & reporting with trained merchandisers.',
      features: ['Weekly/Monthly visits', 'Photo documentation', 'Compliance checks', 'Issue resolution']
    },
    {
      title: 'POSM Installation',
      icon: Package,
      description: 'Brand assets perfectly placed according to guidelines.',
      features: ['Display setup', 'Signage installation', 'Product placement', 'Brand compliance']
    },
    {
      title: 'Planogram Compliance',
      icon: LayoutGrid,
      description: 'Shelf placement by standard rules and brand requirements.',
      features: ['Shelf optimization', 'Product positioning', 'Space allocation', 'Visual merchandising']
    },
    {
      title: 'Retail Audits',
      icon: BarChart,
      description: 'Data-rich store insights and performance analysis.',
      features: ['Store assessments', 'Competitor analysis', 'Performance metrics', 'Action plans']
    },
    {
      title: 'Launch Execution',
      icon: Rocket,
      description: 'New product go-to-market support and coordination.',
      features: ['Launch planning', 'Multi-city rollout', 'Timeline management', 'Success tracking']
    },
    {
      title: 'Distributor Coordination',
      icon: Network,
      description: 'Seamless brand–distributor flow and relationship management.',
      features: ['Channel coordination', 'Inventory management', 'Relationship building', 'Process optimization']
    },
    {
      title: 'Mystery Shopping',
      icon: Clock,
      description: 'Unbiased evaluation of customer experience and service quality.',
      features: ['Service evaluation', 'Customer journey mapping', 'Quality assessment', 'Improvement recommendations']
    },
    {
      title: 'Brand Protection',
      icon: Shield,
      description: 'Ensuring brand integrity and preventing unauthorized activities.',
      features: ['Brand monitoring', 'Counterfeit detection', 'Compliance enforcement', 'Issue reporting']
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            End-to-end merchandising solutions tailored to your brand's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-vm-bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-vm-accent/10 rounded-xl flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-vm-primary font-smooch font-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm font-smooch font-300 text-vm-primary">
                        <div className="w-1.5 h-1.5 bg-vm-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;