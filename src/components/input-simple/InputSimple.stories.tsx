import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputSimple } from './index';

export default {
  title: 'Components/InputSimple',
  component: InputSimple,
};

const Template: ComponentStory<typeof InputSimple> = (args) => {
  return (
    <InputSimple
      type='text'
      placeholder={ args.placeholder }
    />
  )
}

export const Main = Template.bind({});

Main.args = {
  value: 'test',
  placeholder: 'Заглушка'
};

