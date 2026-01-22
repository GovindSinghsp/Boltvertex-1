import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stores: 0, brands: 0, cities: 0 });
  const sectionRef = useRef(null);

  const finalCounts = { stores: 500, brands: 50, cities: 20 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          stores: Math.floor(finalCounts.stores * progress),
          brands: Math.floor(finalCounts.brands * progress),
          cities: Math.floor(finalCounts.cities * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { label: 'Stores Covered', value: `${counts.stores}+` },
    { label: 'Brands Served', value: `${counts.brands}+` },
    { label: 'Cities', value: `${counts.cities}+` }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl lg:text-6xl font-smooch font-200 text-vm-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-smooch font-300 text-vm-primary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;