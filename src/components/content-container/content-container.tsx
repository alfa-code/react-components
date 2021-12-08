import React from 'react';

import styles from './styles.module.scss';

export function ContentContainer(props: any) {
  const { children } = props;

  return (
    <div className={ styles.container }>
      { children }
    </div>
  )
}

