import React from 'react';

import mainImage from './assets/image.png';

import styles from './styles.module.css';

type Props = {
  children: any;
  [key: string]: any;
}

export function Button(props: Props): JSX.Element {
  const { children, ...rest } = props;
  console.log('mainImage', mainImage);
  return (
    <button className={ styles.button } { ...rest }>
      { children }
      <img src={ mainImage } alt="image" />
    </button>
  )
}
