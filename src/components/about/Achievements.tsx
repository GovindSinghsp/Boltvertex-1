import React from 'react';
import { Trophy, Star, Users, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Industry Recognition',
      description: 'Best Merchandising Agency 2023',
      highlight: 'Award Winner'
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      description: '98% client retention rate',
      highlight: '5-Star Rating'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: '50+ certified merchandisers',
      highlight: 'Expert Team'
    },
    {
      icon: MapPin,
      title: 'Market Coverage',
      description: '500+ stores across India',
      highlight: 'Pan-India'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Achievements
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Recognition and milestones that reflect our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-full mb-6 mx-auto group-hover:bg-vm-accent/20 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 bg-vm-accent text-white text-xs px-2 py-1 rounded-full font-smooch font-400">
                  {achievement.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="font-smooch font-300 text-vm-primary">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;