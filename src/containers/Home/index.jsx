import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';

import CustomButton from '@components/CustomButton';
import Posts from '@components/Posts';

import routes from '@constants/routes';

import './style.scss';

const Home = () => (
  <div className="home">
    <div className="home__header">
      <Link to={routes.CREATE_POST}>
        <CustomButton text="Create post" startIcon={<AddIcon />} />
      </Link>
    </div>

    <Posts />
  </div>
);

export default Home;
