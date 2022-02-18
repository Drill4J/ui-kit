import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { StripedProgressBar } from './striped-progress-bar';

export default {
  title: 'StripedProgressBar',
  component: StripedProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
        step: 1,
      },
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
  },
} as Meta;

const Template: Story = (args) => <StripedProgressBar type="primary" value="100" {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: 'primary', value: 300 };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary', value: 300 };
