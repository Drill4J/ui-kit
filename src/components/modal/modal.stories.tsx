import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Modal } from './modal';
import { Button, CancelButton } from '../forms';

import { Tooltip } from '../tooltip';

storiesOf('Modal', module).add('Modal', () => {
  const [isOpenedModal, setisOpenedModal] = useState(true);
  return (
    <>
      <Button primary size="large" onClick={() => setisOpenedModal(true)}>
        Open modal
      </Button>
      <Modal isOpen={isOpenedModal} onToggle={() => setisOpenedModal(false)}>
        <div tw="px-6">
          <h2>Modal content</h2>
          <Tooltip message="Modal content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium
              laudantium delectus...
            </p>
          </Tooltip>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia
            excepturi aliquid quas nostrum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem
            incidunt quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium
            laudantium delectus...
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia
            excepturi aliquid quas nostrum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem
            incidunt quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium
            laudantium delectus...
          </p>
          <CancelButton size="large" onClick={() => setisOpenedModal(false)}>
            Cancel
          </CancelButton>
        </div>
      </Modal>
    </>
  );
});
