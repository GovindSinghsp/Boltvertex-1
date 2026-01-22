import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      title: 'FMCG Retail Rollout',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Achieved 98% shelf compliance in 3 months.',
      details: 'Complete POSM deployment across 200+ retail outlets with real-time compliance tracking.'
    },
    {
      title: 'Electronics POSM Campaign',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: '300+ stores onboarding completed.',
      details: 'Nationwide electronics brand visibility enhancement with custom display solutions.'
    },
    {
      title: 'Fashion Brand Launch',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Successful multi-city brand launch execution.',
      details: 'Coordinated launch across 15 cities with perfect timing and brand consistency.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Case Studies
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Real results from our merchandising campaigns
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vm-dark/40 to-transparent rounded-xl"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-3xl font-smooch font-400 text-vm-dark">
                        {caseStudy.title}
                      </h3>
                      <p className="text-xl font-smooch font-300 text-vm-accent">
                        {caseStudy.excerpt}
                      </p>
                      <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed">
                        {caseStudy.details}
                      </p>
                      <button className="inline-flex items-center gap-2 text-vm-accent hover:text-vm-dark font-smooch font-400 transition-colors duration-300">
                        View Full Case Study
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-vm-dark" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-vm-dark" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-vm-accent' : 'bg-vm-bg-light'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            See Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;