import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in retail and merchandising'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in large-scale execution management'
    },
    {
      name: 'Amit Patel',
      position: 'Technology Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading digital transformation initiatives'
    },
    {
      name: 'Sneha Gupta',
      position: 'Client Relations Head',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Building lasting brand partnerships'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Leadership Team
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Meet the visionaries driving our success and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vm-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-vm-accent transition-colors duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-vm-accent transition-colors duration-300">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-smooch font-400 text-vm-dark mb-1">{member.name}</h3>
                <p className="text-vm-accent font-smooch font-300 mb-3">{member.position}</p>
                <p className="text-sm font-smooch font-300 text-vm-primary">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;