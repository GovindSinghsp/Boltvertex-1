import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ServicePackages = () => {
  const packages = [
    {
      name: 'Essential',
      description: 'Perfect for small to medium brands',
      features: [
        'Monthly store visits',
        'Basic POSM installation',
        'Compliance reporting',
        'Email support',
        'Up to 50 stores'
      ],
      ideal: 'Ideal for: New brands, Limited budget'
    },
    {
      name: 'Professional',
      description: 'Comprehensive solution for growing brands',
      features: [
        'Bi-weekly store visits',
        'Advanced POSM solutions',
        'Real-time reporting',
        'Dedicated coordinator',
        'Up to 200 stores',
        'Mystery shopping'
      ],
      ideal: 'Ideal for: Established brands, Multi-city presence',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Full-scale solution for large brands',
      features: [
        'Weekly store visits',
        'Custom POSM development',
        'Advanced analytics',
        'Dedicated team',
        'Unlimited stores',
        'Brand protection',
        'Launch support'
      ],
      ideal: 'Ideal for: Large brands, National presence'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Service Packages
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Choose the package that best fits your brand's needs and scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-vm-accent transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vm-accent text-white px-4 py-2 rounded-full text-sm font-smooch font-400">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-vm-primary font-smooch font-300 mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-vm-accent flex-shrink-0" />
                      <span className="font-smooch font-300 text-vm-primary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-vm-bg-light p-4 rounded-lg mb-6">
                  <p className="text-sm font-smooch font-300 text-vm-primary">
                    {pkg.ideal}
                  </p>
                </div>

                <button className={`w-full py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                  pkg.popular 
                    ? 'bg-vm-accent hover:bg-vm-accent/90 text-white shadow-lg hover:shadow-xl' 
                    : 'border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white'
                }`}>
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-vm-primary font-smooch font-300 mb-4">
            Need a custom solution? We can create a package tailored to your specific requirements.
          </p>
          <button className="text-vm-accent hover:text-vm-dark font-smooch font-400 underline transition-colors duration-300">
            Contact us for custom pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;