import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Cells } from './index';

export default {
  title: 'Cells',
  component: Cells,
} as ComponentMeta<typeof Cells>;

export const Clickable = (args) => <Cells.Clickable {...args}>Clickable</Cells.Clickable>;
Clickable.args = {
  disabled: false,
};

export const Compound = (args) => <Cells.Compound {...args}>Compound</Cells.Compound>;
Compound.args = {
  cellName: 'compound',
};

export const Coverage = (args) => <Cells.Coverage {...args} />;
Coverage.args = {
  value: 50,
};

export const CoverageIsZero = (args) => <Cells.Coverage {...args} />;
CoverageIsZero.args = {
  value: 0,
};

export const CoverageProgress = (args) => <Cells.CoverageProgress {...args} />;
CoverageProgress.args = {
  value: 50,
};

export const Duration = (args) => <Cells.Duration {...args} />;
Duration.args = {
  value: 50,
};

export const Highlight = (args) => <Cells.Highlight {...args} />;
Highlight.args = {
  text: 'Highlight',
  searchWords: ['high'],
};

export const TestStatus = (args) => <Cells.TestStatus {...args}>Status</Cells.TestStatus>;
TestStatus.args = {
  type: 'PASSED',
};
