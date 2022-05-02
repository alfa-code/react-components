import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeader } from './index';
import { HeaderProfile } from './../header-profile';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => {
  return (
    <PageHeader
      {...args}
    />
  )
}

export const Main = Template.bind({});

Main.args = {
  label: 'PageHeader',
  linksList: [
    {
      type: 'link',
      url: '/test_1',
      text: 'test_1',
    },
    {
      type: 'link',
      url: '/test_2',
      text: 'test_2',
    },
  ],
  authContent: (
    <HeaderProfile
      avatarSrc="https://html5css.ru/w3images/avatar6.png"
      username="Простой пользователь"
    >
      <ul>
        <li>
          HeaderProfile Content 1
        </li>
        <li>
          HeaderProfile Content 2
        </li>
      </ul>
    </HeaderProfile>

  ),
};
