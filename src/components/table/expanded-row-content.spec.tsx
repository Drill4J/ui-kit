import renderer from 'react-test-renderer';

import { ExpandedRowContent } from './expanded-row-content';

describe('ExpandedRowContent', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ExpandedRowContent data={['1', '2', '3']} gridExpandedTemplateColumns="1fr 1fr 1fr" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
