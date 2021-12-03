import React from 'react';

import styles from './styles.module.css';

type Props = {
  children: any;
}

export function Button(props: Props): JSX.Element {
  const { children } = props;
  return (
    <button className={ styles.button }>
      { children }
    </button>
  )
}
