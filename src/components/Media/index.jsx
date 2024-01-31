/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import cn from 'classnames';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import './style.scss';

const Media = ({ media = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const isImage = media?.content_type?.startsWith('image');

  return (
    <>
      {isImage ? (
        <img
          className={cn('media media__image', { 'media__image--loaded': isLoaded })}
          src={media?.path}
          alt="Media"
          onLoad={handleLoad}
        />
      ) : (
        <video className="media media__video" controls>
          <source src={`${media?.path}#t=0.001`} type="video/mp4" />
        </video>
      )}
      {isImage && !isLoaded && (
        <div className="media">
          <Skeleton height="100%" />
        </div>
      )}
    </>
  );
};

Media.propTypes = {
  media: shape({
    content_type: PropTypes.string,
    path: PropTypes.string,
  }),
};

export default Media;
