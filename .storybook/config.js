import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoriesDecorator } from './storybook-components';
import { GlobalStyled } from '../src/global-styles'

const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const storyWrapper = story => <StoriesDecorator><GlobalStyled/>{story()}</StoriesDecorator>;
addDecorator(withInfo());
addDecorator(storyWrapper);

configure(loadStories, module);
