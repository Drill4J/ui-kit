import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { PercentageBar } from './percentage-bar';

export default {
  title: 'PercentageBar',
  component: PercentageBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <PercentageBar percentage={100} {...args} />;
export const Default = Template.bind({});
Default.args = { percentage: 100 };
