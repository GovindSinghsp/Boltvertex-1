import React from 'react';
import { Shield, Users, BarChart3, Clock, Award, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Reliability',
      description: 'Over 5 years of consistent execution with 98% client retention rate.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained merchandisers with deep retail and brand knowledge.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Results',
      description: 'Real-time reporting and analytics to track performance.'
    },
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Rapid rollout capabilities across multiple locations.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: '100% POSM compliance with rigorous quality checks.'
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Tailored solutions aligned with your brand objectives.'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Why Leading Brands Choose Us
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            We deliver exceptional results through our proven methodology and dedicated expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-vm-bg-light hover:border-vm-accent/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 group-hover:bg-vm-accent/20 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4 group-hover:text-vm-accent transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;