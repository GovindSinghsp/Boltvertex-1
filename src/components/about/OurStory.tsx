import React from 'react';
import { Calendar, TrendingUp, Target } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to transform retail merchandising in India',
      icon: Calendar
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded to 10 cities and served 25+ brands',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Achieved 500+ store coverage and 50+ brand partnerships',
      icon: Target
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
              Our Story
            </h2>
            <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed mb-8">
              Founded in 2019, Vertex Merchandising emerged from a simple yet powerful vision: 
              to bridge the gap between brand strategy and retail execution. We recognized that 
              even the best products could fail without proper in-store presentation and compliance.
            </p>
            <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed mb-8">
              Today, we're proud to be India's leading merchandising agency, trusted by over 50 brands 
              across diverse industries. Our success is built on unwavering commitment to quality, 
              innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-vm-bg-light rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-vm-accent/10 rounded-full flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-vm-accent" />
                </div>
                <div>
                  <div className="text-2xl font-smooch font-400 text-vm-accent mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-smooch font-400 text-vm-dark mb-2">{milestone.title}</h3>
                  <p className="font-smooch font-300 text-vm-primary">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;