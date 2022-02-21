import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { MainProgressBar } from './main-progress-bar';

export default {
  title: 'MainProgressBar',
  component: MainProgressBar,
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

const Template: Story = (args) => <MainProgressBar value="100" {...args} />;
export const Default = Template.bind({});
Default.args = { value: 300 };

export const Primary = Template.bind({});
Primary.args = { type: 'primary', value: 300 };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary', value: 300 };
