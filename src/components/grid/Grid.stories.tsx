import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from './index';

export default {
  title: 'Components/Grid',
  component: Grid.Row,
} as ComponentMeta<typeof Grid.Row>;

const style = {
  background: 'red',
  height: '20px',
  width: '100%',
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid.Row> = (args) => {
  return (
    <Grid.Row>
      <Grid.Col>
        <div style={ style }>1</div>
      </Grid.Col>
      <Grid.Col>
        <div style={ style }>1</div>
      </Grid.Col>
      <Grid.Col>
        <div style={ style }>1</div>
      </Grid.Col>
      <Grid.Col>
        <div style={ style }>1</div>
      </Grid.Col>
    </Grid.Row>
  )
}

export const Main = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  children: 'Grid Item',
  label: 'Grid',
};
