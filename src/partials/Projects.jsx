import React from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import simplizLogo from '../assets/img/simpliz-logo.png';
import qurancordScreenshot from '../assets/img/qurancord-screenshot.png';
import laravelNotesServerSwagger from '../assets/img/laravel-notes-server-swagger.png';
import ayopklUiScreenshot from '../assets/img/ayopkl-ui-screenshot.png';
import ppdbDesktopThumbnail from '../assets/img/ppdb-desktop-thumbnail.jpg';

function Projects() {
  return (
    <article id="projects" className="bg-base-100 py-12 text-black">
      <div className="px-6 mx-auto w-full max-w-7xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:text-center">My Works 🏗️</h2>
          <p className="mb-4 lg:px-2">Check out my project(s) for the sake of society:</p>
          <section className="mb-8">
            <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-x-0">
              <li className="basis-1/2 lg:px-2">
                <article className="p-4 rounded-md border-4 border-black space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <header>
                      <h4 className="text-xl font-bold my-2">Simpliz</h4>
                    </header>
                    <div>
                      <img src={simplizLogo} alt="Simpliz Screenshot" className="rounded border-2 border-black grayscale" />
                      <p className="my-4">Simpliz is stands for simultaneously playable quiz. It is a quiz web app build by fullstack.</p>
                    </div>
                  </div>
                  <footer>
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                      <div className="badge badge-outline">Laravel</div>
                      <div className="badge badge-outline">Blade</div>
                      <div className="badge badge-outline">Tailwindcss</div>
                      <div className="badge badge-outline">DaisyUI</div>
                      <div className="badge badge-outline">Livewire</div>
                      <div className="badge badge-outline">PostgreSQL</div>
                      <div className="badge badge-outline">Redis</div>
                      <div className="badge badge-outline">Web Socket</div>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://github.com/stackpan/simpliz" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                    </div>
                  </footer>
                </article>
              </li>
              <li className="basis-1/2 lg:px-2">
                <article className="p-4 rounded-md border-4 border-black space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <header>
                      <h4 className="text-xl font-bold my-2">notes-server-laravel</h4>
                    </header>
                    <div>
                      <img src={laravelNotesServerSwagger} alt="laravel-notes-server swagger screenshot" className="rounded border-2 border-black grayscale" />
                      <p className="my-4">Dicoding notes app backend server but powered by Laravel 10.</p>
                    </div>
                  </div>
                  <footer>
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                      <div className="badge badge-outline">Laravel</div>
                      <div className="badge badge-outline">PostgreSQL</div>
                      <div className="badge badge-outline">JWT</div>
                      <div className="badge badge-outline">Redis</div>
                      <div className="badge badge-outline">AMQP</div>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://github.com/stackpan/notes-server-laravel" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                    </div>
                  </footer>
                </article>
              </li>
              <li className="basis-1/2 lg:px-2">
                <article className="p-4 rounded-md border-4 border-black space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <header>
                      <h4 className="text-xl font-bold my-2">Qurancord</h4>
                    </header>
                    <div>
                      <img src={qurancordScreenshot} alt="Qurancord Demu Screenshot" className="rounded border-2 border-black grayscale" />
                      <p className="my-4">Qurancord is a discord bot to search and get surah and/or ayah of Al-Quran from an internet API.</p>
                    </div>
                  </div>
                  <footer>
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                      <div className="badge badge-outline">Java</div>
                      <div className="badge badge-outline">Apache Maven</div>
                      <div className="badge badge-outline">JDA Discord</div>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://github.com/stackpan/qurancord" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                    </div>
                  </footer>
                </article>
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h3 className="mb-4 lg:px-2">Legacy project(s)</h3>
            <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-x-0">
              <li className="lg:basis-1/2 lg:px-2">
                <article className="p-4 rounded-md border-4 border-black space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <header>
                      <h4 className="text-xl font-bold my-2">AyoPKL! Mobile</h4>
                    </header>
                    <div>
                      <img src={ayopklUiScreenshot} alt="AyoPKL UI Screenshot" className="rounded border-2 border-black grayscale" />
                      <p className="my-4">AyoPKL! is a website and mobile-based application that help students to find their appropriate place for the job training (in Bahasa = Praktik Kerja Lapangan). I have worked in the mobile client part.</p>
                    </div>
                  </div>
                  <footer>
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                      <div className="badge badge-outline">NodeJS</div>
                      <div className="badge badge-outline">Ionic</div>
                      <div className="badge badge-outline">Android</div>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://youtu.be/Q4shdCUnWIo?si=Vxma9MqKt0DEqhXY" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                    </div>
                  </footer>
                </article>
              </li>
              <li className="lg:basis-1/2 lg:px-2">
                <article className="p-4 rounded-md border-4 border-black space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <header>
                      <h4 className="text-xl font-bold my-2">PPDB Desktop</h4>
                    </header>
                    <div>
                      <img src={ppdbDesktopThumbnail} alt="PPDB Desktop thumbnail" className="rounded border-2 border-black grayscale" />
                      <p className="my-4">PPDB desktop application build from Java</p>
                    </div>
                  </div>
                  <footer>
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                      <div className="badge badge-outline">Java</div>
                      <div className="badge badge-outline">Java Swing</div>
                      <div className="badge badge-outline">MariaDB</div>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://youtu.be/iQ4-v3ctTN0?si=3XhZZQqYSGUoaPlm" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                    </div>
                  </footer>
                </article>
              </li>
            </ul>
          </section>
          <section>
            <p className="mb-4 text-center">
              Find more on
              {' '}
              <a href="https://github.com/stackpan" className="text-primary">
                my Github
                {' '}
                <SiGithub className="inline w-5" />
              </a>
            </p>
          </section>
        </section>
      </div>
    </article>
  );
}

export default Projects;
