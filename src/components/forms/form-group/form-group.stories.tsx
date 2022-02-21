import { ComponentMeta, Story } from '@storybook/react';

import React from 'react';
import { FormGroup } from './form-group';
import { Input } from '../inputs/input';
import { Textarea } from '../inputs/textarea';
import { Icons } from '../../icon';

export default {
  title: 'FormGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const TemplateWithInput: Story = (args) => (
  <div tw="w-[300px]">
    <FormGroup label="" {...args}>
      <Input />
    </FormGroup>
  </div>
);

const TemplateWithTextarea: Story = (args) => (
  <div tw="w-[300px]">
    <FormGroup label="" {...args}>
      <Textarea />
    </FormGroup>
  </div>
);

export const DefaultWithInput = TemplateWithInput.bind({});
DefaultWithInput.args = { label: 'default', optional: false };

export const OptionalWithInput = TemplateWithInput.bind({});
OptionalWithInput.args = { label: 'default', optional: true };

export const OptionalWithInputAndAction = TemplateWithInput.bind({});
OptionalWithInputAndAction.args = { label: 'default', optional: true, actions: <Icons.Info /> };

export const DefaultWithTextarea = TemplateWithTextarea.bind({});
DefaultWithTextarea.args = { label: 'default', optional: false };

export const OptionalWithTextarea = TemplateWithTextarea.bind({});
OptionalWithTextarea.args = { label: 'default', optional: true };

export const OptionalWithTextareaAndAction = TemplateWithTextarea.bind({});
OptionalWithTextareaAndAction.args = { label: 'default', optional: true, actions: <Icons.Info /> };
