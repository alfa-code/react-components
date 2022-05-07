import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color'
  //   },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args} >
      { args.children }
    </Button>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  viewType: 'primary',
  label: 'Button',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: "Primary",
  label: 'Button',
  viewType: 'primary',
  icon: 'https://www.pngkit.com/png/full/438-4380629_escuela-de-ingenier-a-mach-correct-icon-png.png',
};


export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  label: 'Button',
  viewType: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  children: "Secondary",
  label: 'Button',
  viewType: 'secondary',
  icon: 'https://www.pngkit.com/png/full/438-4380629_escuela-de-ingenier-a-mach-correct-icon-png.png',
};
