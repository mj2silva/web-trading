import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useState,
} from 'react';

import { toast } from 'react-toastify';
import styles from '@styles/ConfigField.module.scss';
import cn from 'classnames';
import Spinner from '../Spinner';

import { STATE_CHANGED } from '../../lib/firebase';
import { updateUserProfilePicture, uploadImage } from '../../lib/repository/usersRepository';
import { UserContext } from '../Layout/UserProvider';

const ChangeProfilePicture : FC = () => {
  const { user } = useContext(UserContext);
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<string>('0');
  const [selectedFile, setSelectedFile] = useState<File>();
  const [error, setError] = useState<string>();

  const handleSubmit : FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (selectedFile && user) {
      setUploading(true);
      const filePath = `users/${user?.uid}/profile-picture`;
      const [ref, task] = uploadImage(selectedFile, filePath);
      task.on(STATE_CHANGED, (snapshot) => {
        const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
        setProgress(percentage);
      });
      task.then(async () => {
        const newDownloadUrl = await ref.getDownloadURL();
        await updateUserProfilePicture(ref.fullPath, newDownloadUrl, user);
        toast.success('Se actualizó tu foto de perfil correctamente', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setUploading(false);
      }).catch((err) => {
        setError(err.message);
        toast.error('Hubo un error al actualizar los datos, intenta nuevamente más tarde', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setUploading(false);
      });
    }
  };
  const handleChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (event.target.files) {
      const file = Array.from(event.target.files)[0];
      setSelectedFile(file);
    } else {
      setError('Debe seleccionar un archivo');
    }
  };
  return (
    <form className={styles.ConfigField} onSubmit={handleSubmit}>
      <label className={styles.ConfigField_Wrapper} htmlFor="profilePicture">
        <span className={styles.ConfigField_Label}>Cambiar foto de perfil</span>
        <input
          className={styles.ConfigField_FileInput}
          name="profilePicture"
          type="file"
          accept=".jpg | .png"
          onChange={handleChange}
        />
      </label>
      <button
        disabled={uploading}
        className={cn('button', styles.ConfigField_Button)}
        type="submit"
      >
        { uploading ? <Spinner /> : 'Guardar' }
      </button>
      {uploading && (
      <div>
        Subiendo:
        {' '}
        {progress}
      </div>
      ) }
      { error && (
        <div className={styles.ConfigField_Error}>
          Error:
          {' '}
          {error}
        </div>
      )}
    </form>
  );
};

export default ChangeProfilePicture;
