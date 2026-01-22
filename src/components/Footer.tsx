import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-vm-dark text-vm-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-smooch font-300 text-white mb-4">
              Vertex Merchandising
            </h3>
            <p className="font-smooch font-300 text-vm-soft leading-relaxed mb-6 max-w-md">
              Elevating brands at the point of sale through premium merchandising 
              execution and retail compliance services.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-vm-accent" />
                <span className="font-smooch font-300 text-sm">hello@vertexmerchandising.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-vm-accent" />
                <span className="font-smooch font-300 text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-smooch font-400 text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Case Studies', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-smooch font-300 text-vm-soft hover:text-vm-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-smooch font-400 text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {['Store Visits', 'POSM Installation', 'Retail Audits', 'Launch Execution'].map((service) => (
                <li key={service}>
                  <span className="font-smooch font-300 text-vm-soft">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-vm-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-smooch font-300 text-vm-soft text-sm">
              © 2026 Vertex Merchandising. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="font-smooch font-300 text-vm-soft hover:text-vm-accent transition-colors duration-300 text-sm"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-vm-primary/20 rounded-full flex items-center justify-center hover:bg-vm-accent transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-vm-soft hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;