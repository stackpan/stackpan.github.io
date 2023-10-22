import React from 'react';
import stackpanLogo from '../assets/img/stackpan-logo.svg';

function Home() {
  return (
    <article id="home" className="bg-neutral">
      <div className="px-6">
        <section className="lg:px-2 min-h-screen flex flex-col gap-8 justify-center mx-auto w-full max-w-7xl relative">
          <h1>
            <span className="inline-block w-full text-xl">Hi, I&apos;m </span>
            <span className="inline-block w-full text-5xl font-bold">Stackpan</span>
          </h1>
          <div className="flex justify-end lg:-order-1 lg:-mt-48">
            <img src={stackpanLogo} alt="Stackpan Logo" className="w-full max-w-lg lg:absolute" />
          </div>
          <p>
            <span className="inline-block w-full text-xl">My name is </span>
            <span className="inline-block w-full text-4xl font-bold">Ivan Rizkya Susanto</span>
          </p>
          <div className="absolute bottom-10 md:left-1/2 md:-translate-x-1/2">
            <p>
              <span className="uppercase">Scroll down</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 ml-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Home;
