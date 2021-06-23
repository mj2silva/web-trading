import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from '@styles/SocialCard.module.scss';

type Props = {
  className?: string,
  content: {
    logoUrl: string,
    message: string,
    buttonText: string,
    cardName?: string,
  },
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const SocialCard: FC<Props> = (props: Props) => {
  const { className, content } = props;
  const socialCardClassName = cn(className, styles.SocialCard);
  const buttonClassName = cn('button', styles.SocialCard_Button);
  return (
    <div className={socialCardClassName}>
      <div className={styles.SocialCard_Logo}>
        <img className="image" src={content.logoUrl} alt={`Icono ${content.cardName}`} />
      </div>
      <div className={styles.SocialCard_Message}>
        { content.message }
      </div>
      <Link href="#">
        <a className={buttonClassName}>
          { content.buttonText }
        </a>
      </Link>
    </div>
  );
};

SocialCard.defaultProps = defaultProps;

export default SocialCard;
