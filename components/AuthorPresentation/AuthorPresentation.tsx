import { FC, useRef } from 'react';
import cn from 'classnames';
import styles from '@styles/AuthorPresentation.module.scss';
import useSlider from 'components/CustomerStories/useSlider';
import AuthorPresentationControl from './AuthorPresentationControl';
import SinglePresentation from './SinglePresentation';

const authors = [
  {
    id: 1,
    name: 'Renzo Wenzel',
    pictureUrl: '/img/renzo.jpeg',
    message: 'Gracias por llegar hasta aquí',
  },
  {
    id: 2,
    name: 'Antonio Hernández',
    pictureUrl: '/img/antonio.jpg',
    message: 'Empecemos este programa juntos',
  },
];

const AuthorPresentation: FC = () => {
  const className = cn('section', styles.AuthorPresentation);
  const authorPresentationRef = useRef<HTMLDivElement>(null);
  const slider = useSlider({ auto: false, totalPages: authors.length, ref: authorPresentationRef });
  return (
    <section ref={authorPresentationRef} className={className}>
      <div className={styles.AuthorPresentation_Carousel}>
        {
          authors.map((author, index) => (
            <SinglePresentation
              author={author}
              activeAuthorId={slider.currentStep}
              id={index}
              totalSteps={authors.length}
              key={`auth-img${index + 1}`}
            />
          ))
        }
        <div className={styles.AuthorPresentation_Controls}>
          {
            authors.map((author, index) => (
              <AuthorPresentationControl
                id={index}
                activeId={slider.currentStep}
                activeClassName={styles.AuthorPresentation_Control_active}
                className={styles.AuthorPresentation_Control}
                onClick={() => { slider.goToPage(index); }}
                key={`btn-autho-img${index + 1}`}
              />
            ))
          }
        </div>
      </div>
      <p className={styles.AuthorPresentation_Message}>
        Si aún no te convences de tomar este programa donde te enseñaremos el paso
        a paso para convertirte en un trader, explicado de manera sencilla pero
        eficaz. Entonces...
      </p>
    </section>
  );
};

export default AuthorPresentation;
