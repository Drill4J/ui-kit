import renderer from 'react-test-renderer';

import { FilledBadge } from './filled-badge';

describe('FilledBadge', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<FilledBadge>Filled badge</FilledBadge>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
