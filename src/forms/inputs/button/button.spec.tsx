import renderer from 'react-test-renderer';

import { Button } from './button';

it('should match snapshot', () => {
  const tree = renderer
    .create(
      <Button primary size="large">
        Primary large
      </Button>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
