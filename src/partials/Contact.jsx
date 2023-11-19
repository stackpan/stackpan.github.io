import React from 'react';
import contacts from '../data/contactData';
import ContactButton from '../components/ContactButton';

function Contact() {
  return (
    <article id="contact" className="bg-base-300 py-12 text-black">
      <div className="px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:text-center md:px-2">
            <span className="decoration-2 decoration-secondary hover:underline">Connect With Me</span>
            {' '}
            👥
          </h2>
          <div className="flex flex-col justify-center gap-2 lg:flex-row lg:flex-wrap md:gap-x-0">
            {contacts.map((contact) => (
              <div key={contact.label} className="lg:basis-1/2 md:px-2">
                <ContactButton
                  url={contact.url}
                  label={contact.label}
                  Icon={contact.icon}
                  rel={contact.rel}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default Contact;
