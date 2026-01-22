import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingComparison from '../components/pricing/PricingComparison';
import CustomSolutions from '../components/pricing/CustomSolutions';
import PricingFAQ from '../components/pricing/PricingFAQ';

const Pricing = () => {
  return (
    <div className="min-h-screen pt-16">
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <CustomSolutions />
      <PricingFAQ />
    </div>
  );
};

export default Pricing;