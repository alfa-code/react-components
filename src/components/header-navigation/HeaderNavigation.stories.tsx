import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderNavigation } from './index';

export default {
  title: 'Components/HeaderNavigation',
  component: HeaderNavigation,
} as ComponentMeta<typeof HeaderNavigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderNavigation> = (_args) => {
  return (
    <HeaderNavigation />
  )
}

export const Main = Template.bind({});
