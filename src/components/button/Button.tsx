import React from 'react';

import styles from './styles.module.scss';

type Props = {
  children: any;
  [key: string]: any;
}

export function Button(props: Props): JSX.Element {
  const { children, ...rest } = props;
  return (
    <button className={ styles.button } { ...rest }>
      { children }
    </button>
  )
}
