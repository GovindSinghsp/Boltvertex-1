import React from 'react';
import { TrendingUp, Clock, Shield, Users, BarChart3, Target } from 'lucide-react';

const ServiceBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Sales',
      description: 'Average 25% increase in product visibility and sales performance',
      metric: '+25%'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduce internal resource allocation by focusing on core business',
      metric: '60% Faster'
    },
    {
      icon: Shield,
      title: 'Brand Compliance',
      description: 'Ensure consistent brand representation across all touchpoints',
      metric: '98% Compliance'
    },
    {
      icon: Users,
      title: 'Expert Execution',
      description: 'Trained professionals with deep retail and merchandising expertise',
      metric: '50+ Experts'
    },
    {
      icon: BarChart3,
      title: 'Data Insights',
      description: 'Actionable analytics to optimize your retail strategy',
      metric: 'Real-time Data'
    },
    {
      icon: Target,
      title: 'Market Coverage',
      description: 'Extensive network covering major retail chains nationwide',
      metric: '500+ Stores'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Why Choose Our Services
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Measurable benefits that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-vm-bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 mx-auto group-hover:bg-vm-accent/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="text-3xl font-smooch font-200 text-vm-accent mb-2">
                {benefit.metric}
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4 group-hover:text-vm-accent transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;