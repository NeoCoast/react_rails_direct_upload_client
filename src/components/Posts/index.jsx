import React from 'react';
import cn from 'classnames';

import Loader from '@components/Loader';
import Media from '@components/Media';

import { useGetPostsQuery } from '@redux/Reducers/apiSlice';

import './style.scss';

const Posts = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (error) {
    return (
      <div className="posts">
        <div className="posts__error">
          An error occurred while loading posts.
          <br />
          Please try again later.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="posts">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'posts',
        { 'posts--loaded': data?.posts?.length },
      )}
    >
      {data?.posts?.length ? (
        <div className="posts__content">
          {data?.posts?.map(({ media_files }) => (
            media_files?.map((media) => (
              <div className="posts__content-item" key={media.id}>
                <Media media={media} />
              </div>
            ))
          ))}
        </div>
      ) : (
        <div className="posts__empty">No posts yet</div>
      )}
    </div>
  );
};

export default Posts;
