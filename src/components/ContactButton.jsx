import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function ContactButton({ url, label, Icon }) {
  return (
    <a href={url} className="btn btn-primary btn-block normal-case hover:bg-accent hover:border-accent active:bg-secondary active:border-secondary" target="_blank" rel="noreferrer">
      <Icon />
      <span>{label}</span>
    </a>
  );
}

ContactButton.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContactButton;
