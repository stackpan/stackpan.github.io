/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ToolCategoryCard({ name, tools, wide }) {
  return (
    <article className="p-4 rounded-md border-base-content border-2 space-y-4 md:h-full transition">
      <header className="text-center">
        <p className="font-bold">{name}</p>
      </header>
      <div>
        <ul className="flex flex-row flex-wrap">
          {tools.map((tool) => (
            <li key={tool.name} className={`basis-1/2 ${wide ? 'md:basis-1/3 lg:basis-1/4' : 'md:basis-full lg:basis-1/2'}`}>
              <div className="p-2 space-x-4 cursor-default group">
                <tool.icon className="inline-block w-6 h-6 md:w-8 md:h-8" />
                <p className="inline-block decoration-accent group-hover:underline">{tool.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

ToolCategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ToolCategoryCard;
