import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from './modal';
import { Button } from '../../forms/inputs/button/button';
import { CancelButton } from '../../forms/inputs/button/cancel-button';

storiesOf('Modal', module)
  .add('Modal', () => {
    const [isOpenedModal, setisOpenedModal] = React.useState(true);
    return (
      <>
        <Button type="primary" size="large" onClick={() => setisOpenedModal(true)}>Open modal</Button>
        <Modal
          isOpen={isOpenedModal}
          onToggle={() => setisOpenedModal(false)}
        >
          <div style={{ padding: '0px 24px', fontFamily: 'sans-serif' }}>
            <h2>Modal content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
            <CancelButton size="large" onClick={() => setisOpenedModal(false)}>Cancel</CancelButton>
          </div>
        </Modal>
      </>
    );
  });
