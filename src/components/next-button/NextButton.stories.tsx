import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NextButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NextButton',
  component: NextButton,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color'
  //   },
  // },
} as ComponentMeta<typeof NextButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NextButton> = (args) => {
  return (
    <NextButton {...args} >
      { args.children }
    </NextButton>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  viewType: 'primary',
  label: 'NextButton',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: "Primary",
  label: 'NextButton',
  viewType: 'primary',
  icon: 'https://www.pngkit.com/png/full/438-4380629_escuela-de-ingenier-a-mach-correct-icon-png.png',
};


export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  label: 'NextButton',
  viewType: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  children: "Secondary",
  label: 'NextButton',
  viewType: 'secondary',
  icon: 'https://www.pngkit.com/png/full/438-4380629_escuela-de-ingenier-a-mach-correct-icon-png.png',
};
