import React, { Component, ReactNode } from 'react';

import Link from 'next/link'

import styles from './styles.module.scss';

type Props = {
  text?: string;
  viewType?: 'primary' | 'secondary';
  className?: string;
  icon?: string;
  children?: any;
  href?: string;
  onClick?: any;
  type?: 'button' | any;
  mode?: 'normal' | 'loading' | 'disabled';
  target?: string;
  space?: 'normal' | 'available';
  nextLink?: ReactNode
}

export class Button extends Component<Props> {
  renderIcon = () => {
    const { icon } = this.props;

    if (!icon) {
      return null;
    }

    return (
      <img
        src={icon}
        alt="Иконка на кнопке"
        className={styles.buttonIcon}
      />
    );
  }

  getButtonClassNames = () => {
    const { viewType } = this.props;

    switch (viewType) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      default:
        return styles.buttonSecondary;
    }
  }

  renderButtonContent = () => {
    const {
      text,
      children,
      mode = 'normal'
    } = this.props;

    const isLoading = mode === 'loading';

    if (isLoading) {
      return 'Загрузка...';
    }

    return (
      <>
        {this.renderIcon()}
        {text || children}
      </>
    )
  }

  render(): ReactNode {
    const {
      text,
      children,
      href,
      onClick,
      className = '',
      type = 'button',
      mode = 'normal',
      target,
      space,
      nextLink,
    } = this.props;

    const isLoading = mode === 'loading';
    const isDisabled = mode === 'disabled';

    const isSpaceAvailable = space === 'available';

    if (href) {
      const linkContent = (
        <>
          {this.renderIcon()}
          {text || children}
        </>
      )

      const linkStyle = `
        ${styles.button}
        ${className}
        ${this.getButtonClassNames()}
        ${(isLoading || isDisabled) ? styles.disabled : ''}
        ${(isSpaceAvailable) ? styles.spaceAvailable : ''}
      `

      if (nextLink) {
        return (
          <Link href={href}>
            <a
              className={ linkStyle }
              target={target}
            >
              {linkContent}
            </a>
          </Link>
        );
      }

      return (
          <a
            className={ linkStyle }
            target={target}
            href={href}
          >
            { linkContent }
          </a>
      );
    }

    return (
      <button
        type={type}
        className={
          `
            ${styles.button}
            ${className}
            ${this.getButtonClassNames()}
            ${styles.button}
            ${(isSpaceAvailable) ? styles.spaceAvailable : ''}
          `
        }
        onClick={onClick}
        disabled={isLoading || isDisabled}
      >
        { this.renderButtonContent() }
      </button>
    );
  }
}
