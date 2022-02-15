import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

type Props = {
  avatarSrc: string,
  username: string;
  children: any;
}

export function HeaderProfile(props: Props): JSX.Element {
  const { username, avatarSrc, children } = props;

  const [isMenuOpen, setMenuState] = useState(false);

  const onBodyClick = (event: any) => {
    const isSelfClicked = !!event.target.closest("#HeaderProfile");

    if (isMenuOpen && !isSelfClicked) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = window.document.querySelector('body');

      body?.addEventListener('click', onBodyClick);
    }

    return () => {
      if (typeof window !== 'undefined') {
        const body = window.document.querySelector('body');
        body?.removeEventListener('click', onBodyClick);
      }
    }
  });

  return (
    <div
      id="HeaderProfile"
      className={ `${styles.headerProfile} ${isMenuOpen ? styles.menuActive : ''}` }
    >
      <div className={ styles.headerProfileInner }>
        <button onClick={ () => { setMenuState(!isMenuOpen) } }>
          <div className={ styles.avatar }>
            <img src={ avatarSrc } alt="avatar" />
          </div>
          <div className={ styles.username }>
            { username }
          </div>
        </button>
        <div className={ `${styles.menuContainer} ${isMenuOpen ?  styles.menuContainerActive : ''}` }>
          { children }
        </div>
      </div>
    </div>
  )
}
