import toast from 'react-hot-toast';

const errorToast = (message, duration) => toast.error(message, {
  className: 'toast',
  duration,
  iconTheme: {
    primary: '#FFF',
    secondary: '#D62246',
  },
  style: {
    backgroundColor: '#D62246',
    color: '#FFF',
  },
});

const successToast = (message, duration) => toast.success(message, {
  className: 'toast',
  duration,
  iconTheme: {
    primary: '#FFF',
    secondary: '#04ADEE',
  },
  position: 'bottom-right',
  style: {
    backgroundColor: '#04ADEE',
    color: '#FFF',
  },
});

const returnFileSize = (number) => {
  if (number < 1024) {
    return `${number} bytes`;
  }

  if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  }

  return `${(number / 1048576).toFixed(1)} MB`;
};

const returnFileType = (fileName) => {
  const splitName = fileName.split('.');
  const type = `.${splitName.at(-1)}`;

  return type || '';
};

export {
  errorToast,
  successToast,
  returnFileSize,
  returnFileType,
};
