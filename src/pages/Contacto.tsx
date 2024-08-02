import React from 'react';
import ContactForm from '../components/Forms/contact-Form/contactForm';

const About = () => (
  <div className="container z-40 w-11/12  h-auto  ml-auto mr-auto mt-14 mb-4 bg-white bg-opacity-0 rounded-lg p-4">
    <div className='flex hover:scale-105 transform transition-transform duration-300'>
    <h1 className="text-3xl font-bold mb-14 sm:w-5/12 mt-16 px-4 w-full animate-fade-in-right dark:text-slate-200">Contacto</h1>
    </div>
    <ContactForm />

  </div>
);

export default About;