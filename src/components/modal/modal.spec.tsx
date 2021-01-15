import renderer from 'react-test-renderer';

import { Modal } from './modal';

describe('Modal', () => {
  it('should match snapshot', () => {
    const showModal = false;
    const handleClose = jest.fn();

    const tree = renderer
      .create(
        <Modal
          isOpen={showModal}
          onToggle={handleClose}
        >
          <div>
            <h2>Modal content</h2>
            <p>Modal content</p>
          </div>
        </Modal>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
