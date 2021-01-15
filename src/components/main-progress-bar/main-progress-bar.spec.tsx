import renderer from 'react-test-renderer';

import { MainProgressBar } from './main-progress-bar';

describe('MainProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<MainProgressBar value="50px" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
