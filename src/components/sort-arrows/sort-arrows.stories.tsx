import React from 'react';
import { storiesOf } from '@storybook/react';

import { SortArrows } from './sort-arrows';

storiesOf('SortArrows', module).add('SortArrows', () => <SortArrows order="ASC" />);
