import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '@components/CustomButton';

import routes from '@constants/routes';

import './style.scss';

const NotFound = () => (
  <div className="not-found">
    <span className="not-found__error">404</span>
    <span className="not-found__text">
      Page Not Found
    </span>
    <Link to={routes.HOME}>
      <CustomButton text="Back to Home" />
    </Link>
  </div>
);

export default NotFound;
