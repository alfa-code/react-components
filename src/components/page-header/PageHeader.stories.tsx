import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeader } from './index';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => {
  return (
    <PageHeader />
  )
}

export const Main = Template.bind({});

Main.args = {
  label: 'PageHeader',
};
