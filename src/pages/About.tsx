import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import TeamSection from '../components/about/TeamSection';
import CompanyValues from '../components/about/CompanyValues';
import Achievements from '../components/about/Achievements';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <OurStory />
      <TeamSection />
      <CompanyValues />
      <Achievements />
    </div>
  );
};

export default About;