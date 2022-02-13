import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageFooter } from './index';

export default {
  title: 'Components/PageFooter',
  component: PageFooter,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageFooter>;

const Template: ComponentStory<typeof PageFooter> = (args) => {
  return (
    <PageFooter />
  )
}

Template.parameters = {
  layout: 'fullscreen',
}

export const Main = Template.bind({});

Main.args = {};
