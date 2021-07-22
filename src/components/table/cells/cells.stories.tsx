import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Cells } from './index';

storiesOf('Cells', module)
  .add('Clickable cell', () => <Cells.Clickable>Click</Cells.Clickable>)
  .add('Compound cell', () => <Cells.Compound cellName="Cell Name" cellAdditionalInfo="Info" />)
  .add('Coverage cell', () => <Cells.Coverage value={100} />)
  .add('Duration cell', () => <Cells.Duration value={0} />)
  .add('Test status cell', () => <Cells.TestStatus type="PASSED">AUTO</Cells.TestStatus>);
