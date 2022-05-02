import React, { useState } from 'react';

import { ContentContainer } from '../content-container';
import { Logo } from '../../components/logo/logo';
import { HeaderNavigation } from '../../components/header-navigation';

import styles from './styles.module.scss';

import { LinksList } from './../../types/index';

type Props = {
  authContent?: any;
  linksList?: LinksList;
}

export function PageHeader(props: Props) {
    const { linksList = [], authContent } = props;

    return (
      <ContentContainer paddingsOnFullWidth={ false } >
        <header className={styles.header}>
            <div className={ styles.logoWrapper } >
              <Logo />
            </div>
            <HeaderContent>
              <>
                <HeaderNavigation
                  linksList={ linksList }
                  className={ styles.navigation }
                />
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
        data-test-id="mobile-menu-button"
      />
      <div className={ `${styles.headerContent} ${isOpened ? styles.headerContentShowed : ''}`  }>
        { children }
      </div>
    </>
);
}
