/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './assets/styles.css';
import MenuItems from './components/MenuItems';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function App() {
  return (
    <div className="drawer font-mono">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <div>
          <MainSection />
          <Footer />
        </div>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-secondary">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
}

export default App;
