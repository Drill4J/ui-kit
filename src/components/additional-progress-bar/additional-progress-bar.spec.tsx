import renderer from 'react-test-renderer';

import { AdditionalProgressBar } from './additional-progress-bar';

describe('SecondaryProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<AdditionalProgressBar value="50px" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
