import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      author: 'Marketing Head, FMCG Brand',
      company: 'Leading Consumer Goods Company',
      text: 'Vertex Merchandising transformed our retail visibility. Their attention to detail and consistent execution has significantly improved our shelf presence across all major retail chains.',
      rating: 5
    },
    {
      author: 'Retail Director',
      company: 'Electronics Brand',
      text: 'Execution was smooth, consistent and impactful. The team\'s professionalism and real-time reporting gave us complete visibility into our retail performance.',
      rating: 5
    },
    {
      author: 'Brand Manager',
      company: 'Fashion Retail Chain',
      text: 'Working with Vertex has been a game-changer for our brand. Their strategic approach to merchandising has resulted in a 40% increase in product visibility.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Trusted by leading brands across industries
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center relative">
                    <Quote className="w-12 h-12 text-vm-accent/20 mx-auto mb-6" />
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-xl lg:text-2xl font-smooch font-300 text-vm-primary mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    <div>
                      <cite className="text-lg font-smooch font-400 text-vm-dark not-italic">
                        {testimonial.author}
                      </cite>
                      <p className="text-vm-accent font-smooch font-300 mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-vm-accent' : 'bg-vm-bg-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;