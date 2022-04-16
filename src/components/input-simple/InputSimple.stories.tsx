import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputSimple } from './index';

export default {
  title: 'Components/InputSimple',
  component: InputSimple,
} as ComponentMeta<typeof InputSimple>;

const Template: ComponentStory<typeof InputSimple> = (args) => {
  return (
    <>
      <div style={ { display: 'flex', justifyContent: 'end', } }>
        <InputSimple type='password' />
      </div>
    </>
  )
}

export const Main = Template.bind({});

Main.args = {
  avatarSrc: 'https://html5css.ru/howto/img_avatar.png',
  username: 'Неопознанный волк',
};

