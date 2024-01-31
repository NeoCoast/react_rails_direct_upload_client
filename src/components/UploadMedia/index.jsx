import React from 'react';
import PropTypes from 'prop-types';
import { FileUploader } from 'react-drag-drop-files';

import { fileTypes } from '@constants';

import './style.scss';

const UploadMedia = ({
  setMediaFile,
}) => {
  const maxSize = 3 * 1024;

  return (
    <div className="upload-media">
      <FileUploader
        classes="upload-media__uploader"
        dropMessageStyle={{ backgroundColor: '#E6E6E6' }}
        hoverTitle=" "
        maxSize={maxSize}
        handleChange={setMediaFile}
        types={fileTypes}
        multiple
      >
        <div className="upload-media__uploader-container">
          <span className="upload-media__uploader-label">
            Drop your file here, or Browse
          </span>
          <span className="upload-media__uploader-info">
            {`Maximum file size ${maxSize / 1024} GB, only images or videos`}
          </span>
        </div>
      </FileUploader>
    </div>
  );
};

UploadMedia.propTypes = {
  setMediaFile: PropTypes.func.isRequired,
};

export default UploadMedia;
