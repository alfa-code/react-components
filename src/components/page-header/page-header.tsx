import React, { PureComponent, ReactNode } from 'react';

import { Logo } from '../../components/logo/logo';
import { HeaderNavigation } from '../../components/header-navigation';
// import { HeaderUser } from '../../src/components/header-user';

import styles from './styles.module.scss';

interface Props {
  authContent?: any;
}
interface State { }

export class PageHeader extends PureComponent<Props, State> {
    render(): ReactNode {
        const { authContent } = this.props
        return (
            <header className={styles.header}>
                <Logo />
                <HeaderNavigation />
                  {/* <HeaderUser /> */}
                <div className={styles.marginLeftAuto}>
                  { authContent }
                </div>
            </header>
        );
    }
}
