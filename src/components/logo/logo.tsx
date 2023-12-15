import React, { PureComponent, ReactNode } from 'react';

import logoImage from '../../assets/icons/logo/logo_horizontal_black.svg';

import styles from './styles.module.scss';

interface Props {
  type?: 'dark' | 'short' | 'default' | 'white' | 'black';
  className?: string;
  component?: any;
}

interface State { };

export class Logo extends PureComponent<Props, State> {
  static defaultProps = {
    type: 'default'
  }

  render(): ReactNode {
    const {
      type,
      className,
      component: Link,
    } = this.props;

    const classNames = `${styles.logoLink} ${className ? className : ''}`;

    if (Link) {
      return (
        <Link
          href='/'
          className={classNames}
          legacyBehavior
        >
          <img
            src={ logoImage }
            alt="Логотип Alfa-Brain"
          />
        </Link>
      );
    }

    return (
      <a
        href='/'
        className={classNames}
      >
        <img
          src={ logoImage }
          alt="Логотип Alfa-Brain"
        />
      </a>
    );
  }
}
