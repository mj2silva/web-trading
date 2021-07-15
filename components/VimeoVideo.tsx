import {
  FC, useContext, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';
import VimeoPlayer from '@vimeo/player';

import { UserContext } from './Layout/UserProvider';
import Spinner from './Spinner';

const VimeoVideo: FC = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const linkClassName = cn('link', styles.CourseView_GoBack);
  const playerRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      setIsLoading(true);
      const videoPlayer = new VimeoPlayer(playerRef.current, {
        url: 'https://player.vimeo.com/video/571892654',
        responsive: true,
        maxheight: 500,
        maxwidth: 700,
      });
      videoPlayer.setVolume(0);
      setIsLoading(false);
    }
  }, [user]);
  return (
    <div className={styles.CourseView_VideoColumn}>
      <a href="/" className={linkClassName}>
        {'<'}
        Regresar a inicio
      </a>
      {
        isLoading || !user?.uid
          ? (
            <div
              className={styles.CourseView__video}
            >
              <Spinner />
            </div>
          )
          : (
            <div
              ref={playerRef}
              className={styles.CourseView__video}
            />
          )
      }
    </div>
  );
};

export default VimeoVideo;
