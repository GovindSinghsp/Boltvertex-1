import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
      <ContactCTA />
    </div>
  );
};

export default Contact;