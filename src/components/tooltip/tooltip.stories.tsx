import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import React from 'react';

import { Tooltip } from './tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  position: {
    control: {
      type: 'radio',
    },
    options: ['top-center', 'top-right', 'top-left', 'left', 'right'],
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '300px' }}>
        <StoryComponent />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: Story = (args) => <Tooltip message="mesage" {...args}>Tooltip</Tooltip>;
export const Default = Template.bind({});

export const TopCenter = Template.bind({});
TopCenter.args = { position: 'top-center' };

export const TopRight = Template.bind({});
TopRight.args = { position: 'top-rigth' };

export const TopLeft = Template.bind({});
TopLeft.args = { position: 'top-left' };

export const Left = Template.bind({});
Left.args = { position: 'left' };

export const Right = Template.bind({});
Right.args = { position: 'right' };

export const BottomCenter = Template.bind({});
BottomCenter.args = { position: 'bottom-center' };
