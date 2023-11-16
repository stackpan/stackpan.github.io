/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import projects from '../data/projectData';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const recentProjects = projects.filter((project) => project.legacy === false);
  const legacyProjects = projects.filter((project) => project.legacy === true);

  return (
    <article id="projects" className="bg-base-200 py-12 text-black">
      <div className="px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:px-2 md:text-center">My Works 🏗️</h2>
          <p className="mb-4 md:px-2">Check out my project(s) for the sake of society:</p>
          <section className="mb-8">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-0">
              {recentProjects.map((project) => (
                <li key={project.name} className="md:basis-1/2 lg:basis-1/3 md:px-2">
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    imageAlt={project.imageAlt}
                    tags={project.tags}
                    url={project.url}
                  />
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-8">
            <h3 className="mb-4 md:px-2">Legacy project(s)</h3>
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-0">
              {legacyProjects.map((project) => (
                <li key={project.name} className="md:basis-1/2 lg:basis-1/3 md:px-2">
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    imageAlt={project.imageAlt}
                    tags={project.tags}
                    url={project.url}
                  />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <p className="mb-4 text-center md:px-2">
              Find more on
              {' '}
              <a href="https://github.com/stackpan" className="text-primary active:text-secondary" target="_blank" rel="noreferrer">
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
