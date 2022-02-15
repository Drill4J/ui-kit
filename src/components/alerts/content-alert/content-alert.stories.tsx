import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { ContentAlert } from './content-alert';

export default {
  title: 'ContentAlert',
  component: ContentAlert,
} as Meta;

const Template:Story = (args) => (<ContentAlert message="Message" type="INFO" {...args} />);

const TemplateWithWhiteText:Story = (args) => (<ContentAlert tw="text-monochrome-white" message="Message" type="INFO" {...args} />);

export const Info = Template.bind({});
Info.args = { type: 'INFO', message: 'Message' };

export const Error = Template.bind({});
Error.args = { type: 'ERROR', message: 'Message' };

export const Warning = Template.bind({});
Warning.args = { type: 'WARNING', message: 'Message' };

export const Success = Template.bind({});
Success.args = { type: 'SUCCESS', message: 'Message' };

export const InfoWithWhiteText = TemplateWithWhiteText.bind({});
InfoWithWhiteText.args = { type: 'INFO', message: 'Message' };

export const ErrorWithWhiteText = TemplateWithWhiteText.bind({});
ErrorWithWhiteText.args = { type: 'ERROR', message: 'Message' };

export const WarningWithWhiteText = TemplateWithWhiteText.bind({});
WarningWithWhiteText.args = { type: 'WARNING', message: 'Message' };

export const SuccessWithWhiteText = TemplateWithWhiteText.bind({});
SuccessWithWhiteText.args = { type: 'SUCCESS', message: 'Message' };
