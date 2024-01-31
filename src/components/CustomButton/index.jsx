import React from 'react';
import PropTypes from 'prop-types';

import LoadingButton from '@mui/lab/LoadingButton';

import './style.scss';

const CustomButton = ({
  customClass = '',
  text,
  variant = 'contained',
  startIcon = null,
  isLoading = false,
  disabled = false,
  onClick = () => {},
}) => (
  <LoadingButton
    className={`custom-button ${customClass}`}
    loading={isLoading}
    disabled={disabled}
    variant={variant}
    startIcon={startIcon}
    loadingPosition="start"
    onClick={onClick}
  >
    {text}
  </LoadingButton>
);

CustomButton.propTypes = {
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.element,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default CustomButton;
