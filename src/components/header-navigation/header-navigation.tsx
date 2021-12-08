import React, { PureComponent, ReactNode } from 'react';
// import Link from 'next/link'

import styles from './styles.module.scss';

interface Props {};
interface State {};

export class HeaderNavigation extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <nav className={ `${styles.headerNavigation}` }>
                <ul>
                    {/* <li>
                        <Link href='/courses'>
                            Курсы
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link href='/blog'>
                            Блог
                        </Link>
                    </li> */}
                    <li>
                        {/* <Link href='/' className='disabled'>
                            Html справочник
                        </Link> */}
                        <a
                            href="https://web-handbook.ru/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Html справочник
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
