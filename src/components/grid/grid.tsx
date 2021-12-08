import React from 'react';

import styles from './styles.module.css';

function Row(props: any) {
  const { children } = props;

  return (
    <div className={ styles.gridContainer }>
      { children }
    </div>
  )
}

type ColProps = {
  children: any;
  gutter?: number | {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

function Col(props: ColProps) {
  const { children, gutter } = props;

  return (
    <div className={ styles.gridCol }>
      { children }
    </div>
  )
}

export const Grid = {
  Row,
  Col,
}
