import React from 'react';
import { Users, Award, MapPin } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-smooch font-100 mb-6">
            About Vertex Merchandising
          </h1>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-4xl mx-auto leading-relaxed">
            Pioneering retail excellence through strategic merchandising solutions since 2019
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Users className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Expert Team</h3>
            <p className="font-smooch font-300 text-vm-bg-light">50+ trained merchandising professionals</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Award className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Industry Leader</h3>
            <p className="font-smooch font-300 text-vm-bg-light">98% client satisfaction rate</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <MapPin className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Pan-India Presence</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Operations across 20+ cities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;