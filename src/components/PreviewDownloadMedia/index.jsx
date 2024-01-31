import React from 'react';
import PropTypes from 'prop-types';

import { returnFileType, returnFileSize } from '@helpers';

import DeleteIcon from '@assets/icons/trash.svg';
import VideoIcon from '@assets/icons/video.svg';
import ImageIcon from '@assets/icons/image.svg';

import './style.scss';

const PreviewDownloadMedia = ({
  customClass = '',
  mediaFile,
  onDelete = () => {},
}) => {
  const isImage = mediaFile?.type.startsWith('image/');

  return (
    <div className={`preview-download-media ${customClass}`}>
      <img
        className="preview-download-media__icon-type"
        src={isImage ? ImageIcon : VideoIcon}
        alt="File type Icon"
      />
      <div className="preview-download-media__info">
        <span className="preview-download-media__info-name">
          {`${mediaFile.name.slice(0, Math.max(0, mediaFile.name.lastIndexOf('.')))}`}
        </span>
        <div className="preview-download-media__info-data">
          <span>{returnFileType(mediaFile.name)}</span>
          <span className="preview-download-media__info-data--hyphen"> - </span>
          <span>{returnFileSize(mediaFile.size)}</span>
        </div>
      </div>
      <img
        className="preview-download-media__icon-action"
        src={DeleteIcon}
        alt="Delete Icon"
        onClick={onDelete}
      />
    </div>
  );
};

PreviewDownloadMedia.propTypes = {
  customClass: PropTypes.string,
  mediaFile: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default PreviewDownloadMedia;
