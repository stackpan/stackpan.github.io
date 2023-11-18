import React from 'react';
import tools from '../data/toolData';
import ToolCategoryCard from '../components/ToolCategoryCard';

function Tools() {
  const filterTools = (category) => tools.filter((tool) => tool.category === category);

  return (
    <article id="tools" className="bg-base-300 py-12 text-base-content">
      <div className="px-4 space-y-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:px-2 md:text-center">
            <span className="decoration-2 decoration-secondary hover:underline">What can I do?</span>
            {' '}
            🤖
          </h2>
          <p className="md:px-2">
            I build web applications for society.
            {' '}
            Not only web, I also create other application types
            {' '}
            like back-end servers, desktops, and discord bots.
          </p>
        </section>
        <section>
          <p className="mb-4 md:px-2">These are the tech stack(s) and tool(s) I use to build awesome things:</p>
          <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-0 lg:justify-center">
            <li className="md:basis-1/2 md:px-2">
              <ToolCategoryCard
                name="The Trilogy of Web"
                tools={filterTools(0)}
              />
            </li>
            <li className="md:basis-1/2 md:px-2">
              <ToolCategoryCard
                name="The Popular Stuff"
                tools={filterTools(1)}
              />
            </li>
            <li className="md:basis-1/2 md:px-2">
              <ToolCategoryCard
                name="Databases"
                tools={filterTools(2)}
              />
            </li>
            <li className="md:basis-1/2 md:px-2">
              <ToolCategoryCard
                name="Infras"
                tools={filterTools(3)}
              />
            </li>
            <li className="md:basis-full md:px-2">
              <ToolCategoryCard
                name="Others"
                tools={filterTools(4)}
                wide
              />
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Tools;
