import React from 'react';

function MenuItemList() {
  const listAClasses = 'rounded hover:bg-secondary hover:text-secondary-content active:!bg-accent active:!text-accent-content';

  return (
    <>
      <li><a href="#home" className={listAClasses}>Home</a></li>
      <li><a href="#about" className={listAClasses}>About</a></li>
      <li><a href="#tools" className={listAClasses}>Tools</a></li>
      <li><a href="#projects" className={listAClasses}>Projects</a></li>
      <li><a href="#awards" className={listAClasses}>Awards</a></li>
      <li><a href="#contact" className={listAClasses}>Contact</a></li>
    </>
  );
}

export default MenuItemList;
