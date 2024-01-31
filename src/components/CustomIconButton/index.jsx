import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';

import './style.scss';

const CustomIconButton = ({
  customClass = '',
  icon,
}) => (
  <IconButton className={`custom-icon-button ${customClass}`}>
    {icon}
  </IconButton>
);

CustomIconButton.propTypes = {
  customClass: PropTypes.string,
  icon: PropTypes.element.isRequired,
};

export default CustomIconButton;
