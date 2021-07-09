import { FC, useRef } from 'react';
import cn from 'classnames';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@styles/CustomerStories.module.scss';
import Storie from './Storie';
import useSlider from './useSlider';
import CustomerStoriesControl from './CustomerStoriesControl';

const CustomerStories: FC = () => {
  const stories = [
    {
      name: 'Juanita Pérez 1',
      message: 'El mejor curso de Trading, aprendí muchísimo',
      pictureUrl: '/img/usuario.png',
    },
    {
      name: 'Juanita Pérez 2',
      message: 'El mejor curso de Trading, aprendí muchísimo',
      pictureUrl: '/img/usuario.png',
    },
    {
      name: 'Juanita Pérez 3',
      message: 'El mejor curso de Trading, aprendí muchísimo',
      pictureUrl: '/img/usuario.png',
    },
    {
      name: 'Juanita Pérez 4',
      message: 'El mejor curso de Trading, aprendí muchísimo',
      pictureUrl: '/img/usuario.png',
    },
  ];
  const storieClassName = cn(styles.CustomerStories_Storie);
  const customerStoriesRef = useRef<HTMLDivElement>(null);

  const {
    currentStep, goToNextPage, goToPreviousPage, goToPage,
  } = useSlider({ auto: true, totalPages: stories.length, ref: customerStoriesRef });

  return (
    <section ref={customerStoriesRef} className={cn('section', styles.CustomerStories)}>
      <span className="target" id="testimonios" />
      <div className={styles.CustomerStories_Title}>
        <div className={styles.CustomerStories_Icon}>
          <img className="image" src="/img/trader-estrella.png" alt="" />
        </div>
        <h3 className={styles.CustomerStories_TitleText}>
          RESEÑAS DE LOS
          {' '}
          <span className={styles.CustomerStories__TextSub}>
            TRADERS
          </span>
        </h3>
      </div>
      <div className={styles.CustomerStories_Stories}>
        {
          stories.map((storie, index) => (
            <Storie
              id={index}
              totalSteps={stories.length}
              mainStorieId={currentStep}
              key={`stor-${index + 1}`}
              storie={storie}
              className={storieClassName}
            />
          ))
        }
      </div>
      <div className={styles.CustomerStories_Controls_mobile}>
        <button onClick={goToPreviousPage} type="button" className={styles.CustomerStories_Control_next}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={goToNextPage} type="button" className={styles.CustomerStories_Control_prev}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={styles.CustomerStories_Controls}>
        {
          stories.map((_, index) => (
            <CustomerStoriesControl
              key={`ch-control-${index + 1}`}
              className={styles.CustomerStories_Control}
              activeClassName={styles.CustomerStories_Control_active}
              id={index}
              activeId={currentStep}
              onClick={goToPage}
            />
          ))
        }
      </div>
    </section>
  );
};

export default CustomerStories;
