import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentContainer } from './index';

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer,
} as ComponentMeta<typeof ContentContainer>;

const Template: ComponentStory<typeof ContentContainer> = (args) => {
  return (
    <ContentContainer>
      { args.children }
    </ContentContainer>
  )
}

export const Main = Template.bind({});

Main.args = {
  children: 'Content',
  label: 'ContentContainer',
};
