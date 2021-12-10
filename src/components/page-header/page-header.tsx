import React from 'react';

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
            <Logo />
            <HeaderNavigation />
            <div className={styles.marginLeftAuto}>
              { authContent }
            </div>
        </header>
      </ContentContainer>
  );
}
