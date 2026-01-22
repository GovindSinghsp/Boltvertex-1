import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹49,999/m',
      features: [
        '100 store visits',
        'Weekly reporting',
        'Basic support',
        'Email updates',
        'Standard compliance'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '₹99,999/m',
      features: [
        '250 store visits',
        'Dedicated coordinator',
        'Priority support',
        'Real-time dashboard',
        'Advanced analytics',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Nationwide rollout',
        'Custom dashboards',
        '24x7 support',
        'Dedicated team',
        'API integration',
        'White-label solution'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Pricing Plans
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Choose the perfect plan for your merchandising needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-vm-accent transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vm-accent text-white px-4 py-2 rounded-full text-sm font-smooch font-400 flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-8">
                  <span className="text-4xl font-smooch font-200 text-vm-accent">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-vm-accent flex-shrink-0" />
                      <span className="font-smooch font-300 text-vm-primary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-vm-accent hover:bg-vm-accent/90 text-white shadow-lg hover:shadow-xl' 
                    : 'border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-vm-primary font-smooch font-300 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="text-vm-accent hover:text-vm-dark font-smooch font-400 underline transition-colors duration-300">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;