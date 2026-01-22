import React from 'react';
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustryExpertise from '../components/home/IndustryExpertise';
import ProcessOverview from '../components/home/ProcessOverview';
import ClientLogos from '../components/home/ClientLogos';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <IndustryExpertise />
      <ProcessOverview />
      <ClientLogos />
    </div>
  );
};

export default Home;