import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Spinner } from './spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;
export const BLUE = Template.bind({});
BLUE.args = { color: 'blue' };

export const White = Template.bind({});
White.args = { };
White.parameters = {
  backgrounds: {
    default: 'blue',
    values: [
      { name: 'blue', value: '#00f' },
    ],
  },
};
