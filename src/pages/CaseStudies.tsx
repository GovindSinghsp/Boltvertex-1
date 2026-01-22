import React from 'react';
import CaseStudiesHero from '../components/casestudies/CaseStudiesHero';
import FeaturedCases from '../components/casestudies/FeaturedCases';
import CasesByIndustry from '../components/casestudies/CasesByIndustry';
import ResultsShowcase from '../components/casestudies/ResultsShowcase';
import ClientTestimonials from '../components/casestudies/ClientTestimonials';

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-16">
      <CaseStudiesHero />
      <FeaturedCases />
      <CasesByIndustry />
      <ResultsShowcase />
      <ClientTestimonials />
    </div>
  );
};

export default CaseStudies;