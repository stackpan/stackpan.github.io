import { ArrowTopRightOnSquareIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function AchievementCard({
  name, description, documentationUrl, url,
}) {
  return (
    <article className="p-4 rounded-md border-2 border-black space-y-2 group transition cursor-pointer">
      <header>
        <h4 className="text-xl font-bold my-2 decoration-2 decoration-secondary group-hover:underline">{ name }</h4>
      </header>
      <div>
        <p className="my-4">{ description }</p>
      </div>
      <footer>
        <div className="flex flex-col items-end justify-end md:flex-row">
          <a href={documentationUrl} className="btn btn-ghost decoration-secondary hover:btn-link active:text-secondary">
            Documentation
            {' '}
            <VideoCameraIcon className="w-5 h-5 inline-block" />
          </a>
          <a href={url} className="btn btn-ghost decoration-secondary hover:btn-link active:text-secondary">
            Check it out
            {' '}
            <ArrowTopRightOnSquareIcon className="w-5 h-5 inline-block" />
          </a>
        </div>
      </footer>
    </article>
  );
}

AchievementCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  documentationUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default AchievementCard;
