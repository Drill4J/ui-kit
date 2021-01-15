import renderer from 'react-test-renderer';

import { Legend } from './legend';

describe('Legend', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Legend legendItems={[
      { label: 'build-cover', color: '#62adfc' },
      { label: 'overlapping', color: '#4f8ac9' },
      { label: 'scope-cover', color: '#aed4fd' },
    ]}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
