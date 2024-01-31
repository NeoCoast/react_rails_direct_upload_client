import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import './style.scss';

const LoaderModal = ({
  isOpen,
  closeModal,
  isLoading = false,
  title = '',
  subtitle = '',
  totalProgress = 0,
}) => {
  const customModalStyle = {
    overlay: {
      backdropFilter: 'blur(5px)',
      backgroundColor: 'transparent',
      webkitBackdropFilter: 'blur(5px)',
    },
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';

      closeModal();
    }
  }, [isLoading]);

  return (
    <Modal
      className="loader-modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      style={customModalStyle}
      ariaHideApp={false}
      closeTimeoutMS={500}
    >
      <div className="loader-modal__container">
        <div className="loader-modal__container-body">
          <div className="loader-modal__container-title">
            {title}
          </div>
          <div className="loader-modal__container-subtitle">
            {subtitle}
          </div>
        </div>
        <div className="loader-modal__container-progress-wrapper">
          <div
            className="loader-modal__container-progress-bar"
            style={{ transform: `translateX(-${100 - totalProgress}%)` }}
          />
        </div>
      </div>
    </Modal>
  );
};

LoaderModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  totalProgress: PropTypes.number,
};

export default LoaderModal;
