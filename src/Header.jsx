/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MenuItems from './components/MenuItems';

function Header() {
  return (
    <header className="w-full navbar absolute">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </label>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <MenuItems />
        </ul>
      </div>
    </header>
  );
}

export default Header;
