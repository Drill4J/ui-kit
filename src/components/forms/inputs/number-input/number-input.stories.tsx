import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { NumberInput } from './number-input';

export default {
  title: 'NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: Story = (args) => <NumberInput tw="w-[300px]" type="number" placeholder="enter text..." {...args} />;
export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
