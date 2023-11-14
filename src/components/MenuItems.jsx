import React from 'react';

function MenuItems() {
  return (
    <>
      <li><a href="#home" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">Home</a></li>
      <li><a href="#about" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">About</a></li>
      <li><a href="#tools" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">Tools</a></li>
      <li><a href="#projects" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">Projects</a></li>
      <li><a href="#awards" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">Awards</a></li>
      <li><a href="#contact" className="hover:bg-accent hover:text-accent-content active:bg-secondary active:text-secondary-content">Contact</a></li>
    </>
  );
}

export default MenuItems;
