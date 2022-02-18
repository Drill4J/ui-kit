import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Radio } from './radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    wrapperColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template = ({ wrapperColor }: {wrapperColor: string}) => (
  <div style={{ color: wrapperColor }}>
    <Radio />
  </div>
);

export const RadioWithColor = Template.bind({});
