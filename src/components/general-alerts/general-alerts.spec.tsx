import React from 'react';
import renderer from 'react-test-renderer';

import { GeneralAlerts } from './general-alerts';

describe('GeneralAlerts', () => {
  it('should match snapshot with the default text', () => {
    const tree = renderer.create(
      <GeneralAlerts type="SUCCESS">SUCCESS</GeneralAlerts>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
