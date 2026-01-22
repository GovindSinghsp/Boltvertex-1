import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@vertexmerchandising.com',
      link: 'mailto:hello@vertexmerchandising.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Delhi, Bangalore',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Talk to Our Experts
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Ready to elevate your retail presence? Let's discuss your merchandising needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                      focusedField === 'name' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                      focusedField === 'email' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                    }`}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                    focusedField === 'company' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Company Name"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                  rows={5}
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 resize-none ${
                    focusedField === 'message' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Tell us about your merchandising needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-6">
                Get in Touch
              </h3>
              <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed mb-8">
                We're here to help you maximize your retail impact. Reach out to discuss 
                your merchandising challenges and discover how we can drive results for your brand.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-vm-accent/10 rounded-full flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-vm-accent" />
                  </div>
                  <div>
                    <h4 className="font-smooch font-400 text-vm-dark group-hover:text-vm-accent transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="font-smooch font-300 text-vm-primary">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Success Toast */}
            {isSubmitted && (
              <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up z-50">
                <CheckCircle className="w-5 h-5" />
                Thank you! We'll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;