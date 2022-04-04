import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { DarkInput } from './dark-input';

export default {
  title: 'DarkInput',
  component: DarkInput,
  argTypes: {
    touched: { type: 'boolean' },
    error: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
} as ComponentMeta<typeof DarkInput>;

const Template: Story = (args) => <DarkInput {...args} />;
export const Default = Template.bind({});
