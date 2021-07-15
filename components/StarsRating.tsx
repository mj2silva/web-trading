import { FC, useState } from 'react';
import cn from 'classnames';
import styles from '@styles/Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type StarProps = {
  id: number,
  currentRating: number,
  focusedRating: number,
  onClick: (id: number) => Promise<void> | void,
  onMouseOver: (id: number) => void,
}

const Star: FC<StarProps> = (props: StarProps) => {
  const {
    id, currentRating, onClick, onMouseOver, focusedRating,
  } = props;
  const className = cn(styles.Stars_Star, {
    [styles.Stars_Star_active]: id <= currentRating || id <= focusedRating,
  });
  const handleClick = async (): Promise<void> => {
    await onClick(id);
  };
  const handleMouseOver = async (): Promise<void> => {
    onMouseOver(id);
  };

  const handleMouseLeave = async (): Promise<void> => {
    onMouseOver(0);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onFocus={handleClick}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      type="button"
      className={className}
    >
      <FontAwesomeIcon icon={faStar} />
      { id }
    </button>
  );
};

type Props = {
  className?: string,
  starsNumber?: number,
  onRatingSelect?: (rating: number) => Promise<void> | void,
}

const defaultProps: Partial<Props> = {
  className: undefined,
  starsNumber: 5,
  onRatingSelect: undefined,
};

const StarsRating: FC<Props> = (props: Props) => {
  const { className, starsNumber = 5, onRatingSelect } = props;
  const [rating, setRating] = useState(0);
  const [focusedRating, setFocusedRating] = useState(0);
  const starsClassName = cn(styles.Stars, className);
  const handleClick = async (id: number): Promise<void> => {
    setRating(id);
    if (onRatingSelect) await onRatingSelect(id);
  };
  return (
    <div className={starsClassName}>
      {
        [...Array(starsNumber)].map((_, index) => (
          <Star
            id={index}
            key={`star-${index + 1}`}
            currentRating={rating}
            focusedRating={focusedRating}
            onClick={handleClick}
            onMouseOver={setFocusedRating}
          />
        ))
      }
    </div>
  );
};

StarsRating.defaultProps = defaultProps;

export default StarsRating;
