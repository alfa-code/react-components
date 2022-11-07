import React, { PureComponent, ReactNode, ReactElement } from 'react';
import { LinksList, LinkItemOrLinkList } from './../types/index';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  linksList: LinksList;
  LinkComponent?: any;
};

function renderLinks(linksList: LinksList, LinkComponent = null): any {
  if (Array.isArray(linksList)) {
    const links = linksList.map((link) => {
      return renderLink(link, LinkComponent);
    });

    return links;
  }

  return null;
}

function renderLink(linkItem: LinkItemOrLinkList, LinkComponent: any): ReactElement | ReturnType<typeof renderLinks> | null {
  if (linkItem.type === 'link' && linkItem.url) {
    if (LinkComponent) {
      return (
        <li key={ linkItem.text }>
          <LinkComponent
            href={ linkItem.url }
            passHref
            legacyBehavior
          >
              { linkItem.text }
          </LinkComponent>
        </li>
      )
    } else {
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

  }

  if (linkItem.type === 'list') {
    return renderLinks(linkItem.list);
  }

  return null;
}

export class HeaderNavigation extends PureComponent<Props> {
    render(): ReactNode {
        const { className, linksList, LinkComponent = null } = this.props;

        return (
            <nav className={ `${styles.headerNavigation} ${className}` }>
                <ul>
                  {
                    renderLinks(linksList, LinkComponent)
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
