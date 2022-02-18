import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { ContentAlert } from './content-alert';

export default {
  title: 'ContentAlert',
  component: ContentAlert,
} as Meta;

const Template:Story = (args) => (<ContentAlert type="INFO" {...args}>Message</ContentAlert>);

const TemplateWithWhiteText:Story = (args) => (<ContentAlert tw="text-monochrome-white" type="INFO" {...args}>Message</ContentAlert>);

export const Info = Template.bind({});
Info.args = { type: 'INFO' };

export const Error = Template.bind({});
Error.args = { type: 'ERROR' };

export const Warning = Template.bind({});
Warning.args = { type: 'WARNING' };

export const Success = Template.bind({});
Success.args = { type: 'SUCCESS' };

export const InfoWithWhiteText = TemplateWithWhiteText.bind({});
InfoWithWhiteText.args = { type: 'INFO' };

export const ErrorWithWhiteText = TemplateWithWhiteText.bind({});
ErrorWithWhiteText.args = { type: 'ERROR' };

export const WarningWithWhiteText = TemplateWithWhiteText.bind({});
WarningWithWhiteText.args = { type: 'WARNING' };

export const SuccessWithWhiteText = TemplateWithWhiteText.bind({});
SuccessWithWhiteText.args = { type: 'SUCCESS' };
