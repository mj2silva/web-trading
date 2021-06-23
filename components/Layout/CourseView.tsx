import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';

const CourseView: FC = () => {
  const courseViewClassName = cn('section', styles.CourseView);
  return (
    <section className={courseViewClassName}>
      <div className="course-view__container">
        <div className="course-view__video-column">
          <a href="/index.html" className="link course-view__go-back">
            {'<'}
            Regresar a inicio
          </a>
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/0R9R4U0ZHy4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="course-view__video"
            allowFullScreen
          />
        </div>

        <div className="course-view__nav-column">
          <h2 className="course-view__nav-title">
            <span className="course-view__title-sub">MÓDULOS</span>
            DEL PROGRAMA
          </h2>
          <div className="accordion accordion--with-list course-view__accordion">
            <div className="accordion__column accordion__column--single">
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 1</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        3. Exchanges y Wallets
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        4. TradingView
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 2</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 3</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 4</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 5</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 6</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 7</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 8</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 9</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 10</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 11</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <div className="accordion__item-head">
                  <div className="accordion__item-description">
                    <h3 className="accordion__item-title">Módulo 12</h3>
                  </div>
                  <div className="accordion__item-helper">{'>'}</div>
                </div>
                <div className="accordion__content">
                  <ul className="accordion__list module-abstract">
                    <li className="module-abstract__topic">
                      <span className="module-abstract__topic-name">
                        1. Introducción
                      </span>
                      <span className="module-abstract__icon">X</span>
                    </li>
                    <li className="module-abstract__topic">2. Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?</li>
                    <li className="module-abstract__topic">3. Exchanges y Wallets</li>
                    <li className="module-abstract__topic">4. TradingView</li>
                  </ul>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseView;
