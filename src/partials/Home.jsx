/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowLongDownIcon } from '@heroicons/react/24/outline';
import stackpanLogo from '../assets/img/stackpan-logo.svg';

function Home() {
  return (
    <article id="home" className="bg-base-100">
      <div className="px-4">
        <section className="md:px-2 min-h-screen flex flex-col gap-8 justify-center mx-auto w-full max-w-7xl relative">
          <h1>
            <span className="inline-block w-full text-xl">Hi, I&apos;m </span>
            <span className="inline-block w-full text-5xl font-bold">Stackpan</span>
          </h1>
          <div className="flex justify-end lg:-order-1 lg:-mt-48">
            <img src={stackpanLogo} alt="Stackpan Logo" className="w-full max-w-lg lg:absolute" />
          </div>
          <p>
            <span className="inline-block w-full text-xl">My name is </span>
            <TypeAnimation
              preRenderFirstString
              sequence={[
                'Ivan',
                3000,
                'Ivanzkyanto',
                3000,
                'Ivan Rizkya',
                3000,
                'Ivan Rizkyanto',
                3000,
                'Ivan Rizkya Susanto',
                5000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block w-full text-4xl font-bold"
              repeat={Infinity}
            />
          </p>
          <a href="#about" className="p-0 absolute bottom-10 md:p-4 md:left-1/2 md:-translate-x-1/2">
            <p className="animate-bounce">
              <span className="uppercase">Scroll down</span>
              <ArrowLongDownIcon className="w-6 h-6 ml-4 inline-block" />
            </p>
          </a>
        </section>
      </div>
    </article>
  );
}

export default Home;
