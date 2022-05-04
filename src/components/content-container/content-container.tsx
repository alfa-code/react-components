import React from 'react';

import styles from './styles.module.scss';

type Props = {
  children: any,
  className?: string;
  paddingsOnFullWidth?: boolean;
}

export function ContentContainer(props: Props) {
  const {
    children,
    className,
    paddingsOnFullWidth = true,
  } = props;

  return (
    <div
      className={ `${ styles.container } ${paddingsOnFullWidth ? styles.paddings : ''} a ${ className ? className : '' }` }
    >
      { children }
    </div>
  )
}

