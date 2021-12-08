import React, { PureComponent, ReactNode } from 'react';

import Link from 'next/link';

import logoImage from '../../assets/icons/logo/logo.svg';
import logoShort from '../../assets/icons/logo/logo-without-name.svg';
import logoDark from '../../assets/icons/logo/logo-without-name-dark.svg';

import styles from './styles.module.scss';

interface Props {
  type?: 'dark' | 'short' | 'default' | 'white' | 'black';
  className?: string;
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
    const { type, className } = this.props;

    // @ts-ignore
    const logoPath = logoImgMap[type];
    console.log('logoPath:', logoPath);

    return (
      <Link href='/' >
        <a className={`${styles.logoLink} ${className ? className : ''}`}>
          <img src={ logoPath } alt="" />
        </a>
      </Link>
    );
  }
}
