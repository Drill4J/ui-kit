import React from 'react';
import renderer from 'react-test-renderer';

import { MessagePanel } from './message-panel';

describe('MessagePanel', () => {
  it('should match snapshot with the default text', () => {
    const tree = renderer.create(
      <MessagePanel message={{ type: 'SUCCESS', text: 'Succes! Congratz!' }} onClose={() => {}} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
