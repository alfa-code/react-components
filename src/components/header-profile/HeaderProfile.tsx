import React, { useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  avatarSrc: string,
  username: string;
  children: any;
}

export function HeaderProfile(props: Props): JSX.Element {
  const { username, avatarSrc, children } = props;

  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <div className={ `${styles.headerProfile} ${isMenuOpen ? styles.menuActive : ''}` }>
      <div className={ styles.headerProfileInner }>
        <button onClick={ () => { setMenuState(!isMenuOpen) } }>
          <div className={ styles.avatar }>
            <img src={ avatarSrc } alt="avatar" />
          </div>
          <div className={ styles.username }>
            { username }
          </div>
        </button>
        { isMenuOpen && (
          <div className={ styles.menuContainer }>
            { children }
          </div>
        ) }
      </div>
    </div>
  )
}
