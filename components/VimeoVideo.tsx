import {
  FC, useContext, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';
import VimeoPlayer from '@vimeo/player';

import { UserContext } from './Layout/UserProvider';
import Spinner from './Spinner';

type Props = {
  vimeoPlayerUrl: string,
}

const VimeoVideo: FC<Props> = (props: Props) => {
  const { vimeoPlayerUrl } = props;
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const linkClassName = cn('link', styles.CourseView_GoBack);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<VimeoPlayer>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (playerRef.current) {
      setIsLoading(true);
      if (!player) {
        const videoPlayer = new VimeoPlayer(playerRef.current, {
          url: vimeoPlayerUrl || 'https://player.vimeo.com/video/571892654',
          responsive: true,
          maxheight: 500,
          maxwidth: 700,
        });
        videoPlayer.setVolume(0);
        setPlayer(videoPlayer);
      } else {
        const url = vimeoPlayerUrl || 'https://player.vimeo.com/video/571892654';
        player.loadVideo(parseInt(url.split('/').reverse()[0], 10))
          .catch((reason) => {
            setError(reason.message);
          });
      }
      setIsLoading(false);
    }
  }, [user, vimeoPlayerUrl, player]);
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
              hidden={!!error}
              className={styles.CourseView__video}
            />
          )
      }
      {
        error && (
          <div>
            Error
            {' '}
            { error }
          </div>
        )
      }
    </div>
  );
};

export default VimeoVideo;
