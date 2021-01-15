import { storiesOf } from '@storybook/react';

import { GeneralAlerts } from './general-alerts';
import { Spinner } from '../spinner';

storiesOf('GeneralAlerts', module)
  .add('SUCCESS', () => (
    <GeneralAlerts type="SUCCESS">
      Success message example. Something good happened!
    </GeneralAlerts>
  ))
  .add('ERROR with WARNING', () => (
    <>
      <GeneralAlerts type="ERROR" data-test="general-alerts:error">
        Error message example. Something bad happened.
        Error message example. Something bad happened.
      </GeneralAlerts>
      <GeneralAlerts type="WARNING" data-test="general-alerts:warning">
        Warning message example. Something affects product usage.
      </GeneralAlerts>
    </>
  ))
  .add('WARNING', () => (
    <GeneralAlerts type="WARNING">
      Warning message example. Something affects product usage.
    </GeneralAlerts>
  ))
  .add('INFO', () => (
    <GeneralAlerts type="INFO" />
  ))
  .add('WARNING alert with component', () => (
    <GeneralAlerts type="INFO">
      please wait...
      <Spinner />
    </GeneralAlerts>
  ));
