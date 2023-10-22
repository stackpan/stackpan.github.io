import React from 'react';
import stackpanLogo from '../assets/img/stackpan-logo.svg';

function Home() {
  return (
    <article id="home" className="bg-neutral">
      <div className="px-4 min-h-screen flex flex-col gap-8 justify-center">
        <h1>
          <span className="inline-block w-full text-xl">Hi, I&apos;m </span>
          <span className="inline-block w-full text-5xl font-bold">Stackpan</span>
        </h1>
        <div>
          <img src={stackpanLogo} alt="Stackpan Logo" className="w-full" />
        </div>
        <p>
          <span className="inline-block w-full text-xl">My name is </span>
          <span className="inline-block w-full text-4xl font-bold">Ivan Rizkya Susanto</span>
        </p>
      </div>
    </article>
  );
}

export default Home;
