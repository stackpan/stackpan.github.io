/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ProjectCard({
  name, description, imageUrl, imageAlt, tags, url,
}) {
  return (
    <article className="p-4 rounded-md border-2 border-black space-y-2 h-full flex flex-col justify-between group active:bg-secondary active:border-secondary active:text-secondary-content transition cursor-pointer" onClick={() => window.open(url)}>
      <div>
        <header>
          <h4 className="text-xl font-bold my-2 decoration-2 decoration-secondary group-hover:underline">{name}</h4>
        </header>
        <div>
          <img src={imageUrl} alt={imageAlt} className="rounded border-2 border-black grayscale group-hover:grayscale-0 group-active:border-secondary transition" />
          <p className="my-4">{description}</p>
        </div>
      </div>
      <footer>
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {tags.map((tag) => <div key={tag} className="badge badge-outline">{tag}</div>)}
        </div>
        <div className="flex justify-end">
          <button type="button" className="btn btn-ghost group-hover:btn-link group-active:text-secondary-content hover:decoration-secondary">
            Check it out
            {' '}
            <ArrowTopRightOnSquareIcon className="w-5 h-5 inline-block" />
          </button>
        </div>
      </footer>
    </article>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
