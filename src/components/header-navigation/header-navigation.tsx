import React, { PureComponent, ReactNode } from 'react';
// import Link from 'next/link'

import styles from './styles.module.scss';

interface Props {
  className?: string;
};
interface State {};

export class HeaderNavigation extends PureComponent<Props, State> {


    render(): ReactNode {
        const { className } = this.props;

        return (
            <nav className={ `${styles.headerNavigation} ${className}` }>
                <ul>
                    {/* <li>
                        <Link href='/courses'>
                            Курсы
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            Блог
                        </Link>
                    </li> */}
                    {/* <li>
                        <a href='/courses'>
                            Курсы
                        </a>
                    </li>
                    <li>
                        <a href='/blog'>
                            Блог
                        </a>
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
