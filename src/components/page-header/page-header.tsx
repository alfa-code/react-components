import React, { useState } from 'react';

import { ContentContainer } from '../content-container';
import { Logo } from '../../components/logo/logo';
import { HeaderNavigation } from '../../components/header-navigation';

import styles from './styles.module.scss';

type Props = {
  authContent?: any;
}

export function PageHeader(props: Props) {
    const { authContent } = props;

    return (
      <ContentContainer>
        <header className={styles.header}>
            <div className={ styles.logoWrapper } >
              <Logo />
            </div>
            <HeaderContent>
              <>
                <HeaderNavigation className={ styles.navigation } />
                <div className={ styles.foreignContent } >
                  { authContent }
                </div>
              </>
            </HeaderContent>
        </header>
      </ContentContainer>
  );
}

function HeaderContent(props: any) {
  const { children } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        onClick={
          () => { setIsOpened(!isOpened) }
        }
        className={ styles.mobileMenuButton }
      />
      <div className={ `${styles.headerContent} ${isOpened ? styles.headerContentShowed : ''}`  }>
        { children }
      </div>
    </>
);
}
