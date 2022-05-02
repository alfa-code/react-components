import React, { PureComponent, ReactNode, ReactElement } from 'react';
// import Link from 'next/link'
import { LinksList, LinkItemOrLinkList } from './../../types/index';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  linksList: LinksList;
};

function renderLinks(linksList: LinksList): any {
  if (Array.isArray(linksList)) {
    const links = linksList.map(renderLink);
    return links;
  }

  return null;
}

function renderLink(linkItem: LinkItemOrLinkList): ReactElement | ReturnType<typeof renderLinks> | null {
  if (linkItem.type === 'link' && linkItem.url) {
    return (
      <li key={ linkItem.text }>
        <a
            href={ linkItem.url }
        >
            { linkItem.text }
        </a>
      </li>
    )
  }

  if (linkItem.type === 'list') {
    return renderLinks(linkItem.list);
  }

  return null;
}

export class HeaderNavigation extends PureComponent<Props> {
    render(): ReactNode {
        const { className, linksList } = this.props;

        return (
            <nav className={ `${styles.headerNavigation} ${className}` }>
                <ul>
                  {
                    renderLinks(linksList)
                  }
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
                    {/* <li>
                        <a
                            href="https://web-handbook.ru/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Html справочник
                        </a>
                    </li> */}
                </ul>
            </nav>
        );
    }
}
