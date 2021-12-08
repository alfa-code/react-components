import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return (
    <Logo />
  )
}

export const Main = Template.bind({});

Main.args = {
  label: 'Logo',
};
