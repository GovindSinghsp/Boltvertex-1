import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Leading FMCG Brand', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Electronics Giant', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Fashion Retailer', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Food & Beverage Co.', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Healthcare Brand', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Automotive Parts', logo: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Join 50+ brands who trust us with their retail execution
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-vm-accent/10 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                  <span className="text-2xl font-smooch font-400 text-vm-accent">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs font-smooch font-300 text-vm-primary text-center">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-smooch font-400 text-vm-dark">Active Projects:</span>
            </div>
            <span className="font-smooch font-200 text-2xl text-vm-accent">127</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;