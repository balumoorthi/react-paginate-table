import React from 'react';

import PropTypes from 'prop-types';

const Section = ({ options }) => <section {...options} />;

export default Section;

Section.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};
