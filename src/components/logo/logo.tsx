import React, { PureComponent, ReactNode } from 'react';

import logoImage from '../../assets/icons/logo/logo.svg';
import logoShort from '../../assets/icons/logo/logo-without-name.svg';
import logoDark from '../../assets/icons/logo/logo-without-name-dark.svg';

import styles from './styles.module.scss';

interface Props {
  type?: 'dark' | 'short' | 'default' | 'white' | 'black';
  className?: string;
  component?: any;
}

interface State {};

const logoImgMap = {
  dark: logoDark,
  short: logoShort,
  default: logoImage,
}

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

    // @ts-ignore
    const logoPath = logoImgMap[type];

    const classNames = `${styles.logoLink} ${className ? className : ''}`;

    if (Link) {
      return (
        <Link href='/' legacyBehavior>
          <a className={ classNames }>
            <img
              src={ logoPath }
              alt="Alfa-Code"
            />
          </a>
        </Link>
      );
    }

    return (
        <a
          href='/'
          className={ classNames }
        >
          <img
            src={ logoPath }
            alt="Логотип Alfa-Code"
          />
        </a>
    );
  }
}
