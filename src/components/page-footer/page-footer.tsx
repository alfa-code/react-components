import React from 'react';

// import Link from 'next/link';

import { Logo } from '../logo';
import { ContentContainer } from '../content-container';

import styles from './styles.module.scss';

export function PageFooter() {
  return (
    <footer>
      <ContentContainer className={ styles.footerMainContent }>
        <div className={ styles.footer }>

          <div className={ styles.footer_1 }>
            <Logo />
            <p className={ styles.text }>
              Платформа для обучения IT специалистов, которая предоставляет видео-курсы о лучших инструментах в веб-разработке.
            </p>
            {/* <p>
              Наши условия использования и конфиденциальности.
            </p> */}
          </div>

          <div className={ styles.footer_2 }>
            <h4 className={ styles.footer_header }>
              Платформа
            </h4>
            <ul className={ styles.list }>
              {/* <li>
                Курсы
              </li> */}
              <li>
                <a
                    href="https://web-handbook.ru/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Html справочник
                </a>
              </li>
              {/* <li>
                Блог
              </li> */}
            </ul>
          </div>

          <div className={ styles.footer_2 }>
            <h4 className={ styles.footer_header }>
              Контакты
            </h4>
            <a
              href="mailto:admin@alfa-code.ru"
              className={ styles.email }
            >
              admin@alfa-code.ru
            </a>
          </div>

          {/* <div className={ styles.footer_2 }>
            <h4 className={ styles.footer_header }>
              Рассылка
            </h4>
            <p>
              Подпишитесь на наши новости
            </p>
          </div> */}

        </div>
      </ContentContainer>
      <div className={ styles.copyright }>
        <span>
          © «Alfa Code» 2022
        </span>
      </div>
    </footer>
  )
}
