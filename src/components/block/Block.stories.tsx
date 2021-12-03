import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Block',
  component: Block,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color'
  //   },
  // },
} as ComponentMeta<typeof Block>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Block> = (args) => {
  return (
    <Block />
  )
}

export const Main = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {};
