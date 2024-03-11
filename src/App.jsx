/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './assets/styles.css';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import MenuItemList from './components/MenuItemList';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function App() {
  const [isBtnHidden, setIsBtnHidden] = useState(true);

  useEffect(() => {
    const homeElement = document.getElementById('home');

    const handleScroll = () => {
      setIsBtnHidden(window.scrollY < homeElement.scrollHeight - 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="drawer font-mono lg:text-lg selection:bg-secondary selection:text-secondary-content">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <div>
          <MainSection />
          <Footer />
        </div>
        {(!isBtnHidden) && (
          <a href="#home" className="btn btn-circle fixed bottom-4 right-4 btn-secondary">
            <ChevronUpIcon className="w-6" />
          </a>
        )}
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-base-100">
          <MenuItemList />
        </ul>
      </div>
    </div>
  );
}

export default App;
