import renderer from 'react-test-renderer';

import { Popup } from './popup';

describe('Popup', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Popup
          isOpen={false}
          type="info"
          onToggle={() => {}}
          header={(<h1>Popup</h1>)}
          closeOnFadeClick
        >
          <div>
            <h2>Popup content</h2>
          </div>
        </Popup>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
