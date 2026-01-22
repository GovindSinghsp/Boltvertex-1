import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServicePackages from '../components/services/ServicePackages';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceBenefits />
      <ServicePackages />
    </div>
  );
};

export default Services;