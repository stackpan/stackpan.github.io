import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Parent({ url, rel, children }) {
  const className = 'btn btn-primary btn-outline btn-block normal-case rounded';
  return (
    rel ? (
      <a href={url} className={className} rel={rel}>
        {children}
      </a>
    ) : (
      <a href={url} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  );
}

function ContactButton({
  // eslint-disable-next-line react/prop-types
  url, label, rel, Icon,
}) {
  return (
    <Parent url={url} rel={rel}>
      <Icon />
      <span>{label}</span>
    </Parent>
  );
}

Parent.propTypes = {
  url: PropTypes.string.isRequired,
  rel: PropTypes.string,
};

Parent.defaultProps = {
  rel: null,
};

ContactButton.propTypes = {
  url: PropTypes.string.isRequired,
  rel: PropTypes.string,
  label: PropTypes.string.isRequired,
};

ContactButton.defaultProps = {
  rel: null,
};

export default ContactButton;
