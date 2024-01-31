import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Loader = ({ customClass = '' }) => (
  <div className={`loader ${customClass}`}>
    <div className="loader__pulse-dot loader__pulse-dot--side"></div>
    <div className="loader__pulse-dot loader__pulse-dot--middle"></div>
    <div className="loader__pulse-dot loader__pulse-dot--side"></div>
  </div>
);

Loader.propTypes = {
  customClass: PropTypes.string,
};

export default Loader;
