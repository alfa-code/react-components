import React, { useState } from 'react';
import Link from 'next/link';

import settingsIcon from '../../assets/icons/info-icons/setting.svg';
import outIcon from '../../assets/icons/info-icons/out.svg';

import styles from './styles.module.scss';

type Props = {
  avatarSrc: string,
  username: string;
}

export function HeaderProfile(props: Props): JSX.Element {
  const { username, avatarSrc } = props;

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
          <HeaderMenuList />
        ) }
      </div>
    </div>
  )
}

type MenuItem = {
  link: string,
  text: string,
  icon: any;
};

type HeaderMenuListProps = {
  menuList?: MenuItem[];
}

export function HeaderMenuList(props: HeaderMenuListProps): JSX.Element {
  return (
    <ul className={ styles.list }>
      <li>
        <LinkWrap
          href="/settings"
          alt="Иконка пункта меню Настройки"
          icon={ settingsIcon }
          text="Настройки"
        />
      </li>
      <li>
        <LinkWrap
          href="/logout"
          alt="Иконка пункта меню Выйти"
          icon={ outIcon }
          text="Выход"
        />
      </li>
    </ul>
  )
}

const LinkWrap = ({ href, alt, icon, text }: any) => {
  try {
    return (
      <Link href={ href }>
          <a>
            <img
              src={ icon }
              alt={ alt }
              className={ styles.menuIcon }
            />
            { text }
          </a>
      </Link>
    )
  } catch (e) {
    return (
      <a href={ href }>
          <img
            src={ icon }
            alt={ alt }
            className={ styles.menuIcon }
          />
          { text }
      </a>
    )
  }
}
