import {
  SiApache,
  SiApachemaven,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJetbrains,
  SiLaravel,
  SiLinux,
  SiMariadb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiNpm,
  SiOpenapiinitiative,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiUml,
  SiVisualstudiocode,
} from '@icons-pack/react-simple-icons';
import React from 'react';

function Tools() {
  return (
    <article id="tools" className="bg-base-200 py-12 text-white">
      <div className="px-6 space-y-4 mx-auto w-full md:max-w-3xl lg:max-w-5xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:text-center">What can I do? 🤖</h2>
          <p className="lg:px-2">
            I build web applications for society.
            {' '}
            Not only web, I also create other application types
            {' '}
            like back-end servers, desktops, and discord bots.
          </p>
        </section>
        <section>
          <p className="mb-4 lg:px-2">Here, the tech stack and tools that I use:</p>
          <ul className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-x-0 lg:justify-center">
            <li className="lg:basis-1/2 lg:px-2">
              <article className="p-4 rounded-md border-4 space-y-4 lg:h-full">
                <header className="text-center">
                  <p className="font-bold">The Trilogy of Web</p>
                </header>
                <div>
                  <ul className="flex flex-row flex-wrap">
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiHtml5 className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">HTML</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiCss3 className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">CSS</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiJavascript className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Javascript</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li className="lg:basis-1/2 lg:px-2">
              <article className="p-4 rounded-md border-4 space-y-4 lg:h-full">
                <header className="text-center">
                  <p className="font-bold">Popular Stuff</p>
                </header>
                <div>
                  <ul className="flex flex-row flex-wrap">
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiNodedotjs className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">NodeJS</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiNpm className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">NPM</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiLaravel className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Laravel</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <svg className="inline-block w-6 h-6 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" /></svg>
                        <p className="inline-block">Java</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiApachemaven className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Maven</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiReact className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">ReactJS</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiTailwindcss className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">TailwindCSS</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li className="lg:basis-1/2 lg:px-2">
              <article className="p-4 rounded-md border-4 space-y-4 lg:h-full">
                <header className="text-center">
                  <p className="font-bold">Databases</p>
                </header>
                <div>
                  <ul className="flex flex-row flex-wrap">
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiMysql className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">MySQL</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiMariadb className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">MariaDB</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiPostgresql className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">PostgreSQL</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiRedis className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Redis</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li className="lg:basis-1/2 lg:px-2">
              <article className="p-4 rounded-md border-4 space-y-4 lg:h-full">
                <header className="text-center">
                  <p className="font-bold">Infras</p>
                </header>
                <div>
                  <ul className="flex flex-row flex-wrap">
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiLinux className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Linux</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiDocker className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Docker</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiApache className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Apache</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3 lg:basis-1/2">
                      <div className="py-2 space-x-2">
                        <SiNginx className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Nginx</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
            <li className="lg:basis-full lg:px-2">
              <article className="p-4 rounded-md border-4 space-y-4 lg:h-full">
                <header className="text-center">
                  <p className="font-bold">Others</p>
                </header>
                <div>
                  <ul className="flex flex-row flex-wrap">
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiGit className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Git</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiGithub className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Github</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiVisualstudiocode className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">VS Code</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiJetbrains className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Jetbrains&apos;</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiOpenapiinitiative className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">OpenAPI</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiUml className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">PlantUML</p>
                      </div>
                    </li>
                    <li className="basis-1/2 md:basis-1/3">
                      <div className="py-2 space-x-2">
                        <SiFigma className="inline-block w-6 h-6 md:w-8 md:h-8" />
                        <p className="inline-block">Figma</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Tools;
