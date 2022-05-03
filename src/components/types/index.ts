type LinkItem = {
  type: 'link';
  url: string;
  text: string;
}

type LinkList = {
  type: 'list';
  list: LinksList;
}

export type LinkItemOrLinkList = LinkItem | LinkList;

export type LinksList = Array<LinkItemOrLinkList>;
