import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { DirectUpload } from 'activestorage';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

import CustomIconButton from '@components/CustomIconButton';
import CustomButton from '@components/CustomButton';
import UploadMedia from '@components/UploadMedia';
import PreviewDownloadMedia from '@components/PreviewDownloadMedia';
import LoaderModal from '@components/LoaderModal';

import routes from '@constants/routes';

import { errorToast, successToast } from '@helpers';

import { useCreatePostMutation } from '@redux/Reducers/apiSlice';

import './style.scss';

class Upload {
  constructor(file, setUploadProgress) {
    this.directUpload = new DirectUpload(
      file,
      `${import.meta.env.VITE_RAILS_URL}/rails/active_storage/direct_uploads`,
      this,
    );
    this.setUploadProgress = setUploadProgress;
  }

  process() {
    return new Promise((resolve, reject) => {
      this.directUpload.create((error, blob) => {
        if (error) {
          reject();
        } else {
          resolve({ signed_id: blob.signed_id });
        }
      });
    });
  }

  directUploadWillStoreFileWithXHR(request) {
    request.upload.addEventListener('progress', (event) => this.updateProgress(event));
  }

  updateProgress(event) {
    const { loaded, total } = event;
    const progress = (loaded / total) * 100;
    const fileId = this.directUpload.id;

    this.setUploadProgress((prev) => ({
      ...prev,
      [fileId]: progress,
    }));
  }
}

const CreatePost = () => {
  const navigateTo = useNavigate();
  const [files, setFiles] = useState([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [totalProgress, setTotalProgress] = useState(0);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(false);

  const [
    createPost,
    {
      isLoading,
      isSuccess,
      error,
    },
  ] = useCreatePostMutation();

  const handleDelete = (index) => {
    const newDocumentsFiles = [...files];
    newDocumentsFiles.splice(index, 1);

    setFiles(newDocumentsFiles);
  };

  const uploadFilesAndSubmit = async (data, fileUploads) => {
    setIsUploadingFiles(true);
    setIsLoaderModalOpen(true);

    try {
      const uploadResults = await Promise.all(fileUploads);

      uploadResults.forEach(({ signed_id }) => {
        data.append('post[media_files][]', signed_id);
      });

      await createPost(data);
    } catch {
      toast.dismiss();
      errorToast('Something went wrong uploading your files. Please try again.');

      setUploadProgress({});
      setTotalProgress(0);
    }

    setIsUploadingFiles(false);
  };

  const onSubmit = async () => {
    const data = new FormData();
    const fileUploads = [];

    files.forEach((file) => {
      fileUploads.push(new Upload(file, setUploadProgress).process());
    });

    await uploadFilesAndSubmit(data, fileUploads);
  };

  useEffect(() => {
    const progressValues = Object.values(uploadProgress);
    const total = progressValues.reduce((acc, curr) => acc + curr, 0);

    setTotalProgress((total / files.length) || 0);
  }, [uploadProgress]);

  useEffect(() => {
    if (error) {
      toast.dismiss();

      errorToast(error?.data?.errors[0] || 'Unexpected error. Please try again.');

      setUploadProgress({});
      setTotalProgress(0);
    } else if (isSuccess) {
      toast.dismiss();

      successToast('Post created successfully');
      navigateTo(routes.HOME);
    }
  }, [error, isSuccess]);

  return (
    <div className="create-post">
      <div className="create-post__header">
        <Link className="create-post__header-link" to={routes.HOME}>
          <CustomIconButton icon={<ArrowBackIcon />} />
        </Link>
        <CustomButton
          text="Save"
          startIcon={<SaveIcon />}
          isLoading={isLoading || isUploadingFiles}
          disabled={!files.length || isLoading || isUploadingFiles}
          onClick={onSubmit}
        />
      </div>
      <div className="create-post__content">
        <UploadMedia
          mediaFile={files}
          setMediaFile={(media) => setFiles([...files, ...media])}
        />
        <div className="create-post__content-files">
          {files.map((file, index) => (
            <PreviewDownloadMedia
              key={file.name + file.size}
              mediaFile={file}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>

      <LoaderModal
        isOpen={isLoaderModalOpen}
        closeModal={() => setIsLoaderModalOpen(false)}
        isLoading={isUploadingFiles}
        title="Your upload is in progress"
        subtitle={`${Math.round(totalProgress)}%`}
        totalProgress={totalProgress}
      />
    </div>
  );
};

export default CreatePost;
