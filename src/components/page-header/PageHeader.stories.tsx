import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeader } from './index';
import { HeaderProfile } from './../header-profile';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => {
  return (
    <PageHeader
      {...args}
      // authContent={
      //   <HeaderProfile
      //     avatarSrc="https://html5css.ru/w3images/avatar6.png"
      //     username="Простой пользователь"
      //   />
      // }
    />
  )
}

export const Main = Template.bind({});

Main.args = {
  label: 'PageHeader',
  authContent: (
    <HeaderProfile
      avatarSrc="https://html5css.ru/w3images/avatar6.png"
      username="Простой пользователь"
    />
  ),
};
