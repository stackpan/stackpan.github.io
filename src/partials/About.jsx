import React from 'react';

function About() {
  return (
    <article id="about" className="bg-primary py-12 text-white">
      <div className="px-6 mx-auto w-full md:max-w-3xl lg:max-w-5xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:text-center">Who Am I? 👀</h2>
          <p className="lg:px-2">
            I am a software engineer who focuses on web development,
            {' '}
            technology enthusiast, and open source fan.
          </p>
        </section>
      </div>
    </article>
  );
}

export default About;
