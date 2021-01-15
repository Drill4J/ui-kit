import renderer from 'react-test-renderer';

import { Spinner } from './spinner';

it('should match snapshot', () => {
  const tree = renderer.create(<Spinner />).toJSON();

  expect(tree).toMatchSnapshot();
});
