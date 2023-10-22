import React from 'react';
import Home from './partials/Home';
import About from './partials/About';
import Tools from './partials/Tools';
import Projects from './partials/Projects';
import Awards from './partials/Awards';
import Contact from './partials/Contact';

function MainSection() {
  return (
    <main>
      <Home />
      <About />
      <Tools />
      <Projects />
      <Awards />
      <Contact />
    </main>
  );
}

export default MainSection;
