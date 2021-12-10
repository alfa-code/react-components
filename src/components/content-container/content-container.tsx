import React from 'react';

import styles from './styles.module.scss';

type Props = {
  children: any,
  className?: string;
}

export function ContentContainer(props: Props) {
  const { children, className } = props;

  return (
    <div className={ `${ styles.container } ${ className ? className : '' }` }>
      { children }
    </div>
  )
}

