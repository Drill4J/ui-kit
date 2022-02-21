import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { Textarea } from './textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    touched: { type: 'boolean' },
    error: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
} as ComponentMeta<typeof Textarea>;

const Template: Story = (args) => <Textarea tw="w-[300px] h-[100px]" {...args} />;

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
