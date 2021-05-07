import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Popup } from './popup';
import { CancelButton, Button } from '../../forms';

storiesOf('Popup', module).add('Popup', () => {
  const [isOpenedInfoPopup, setisOpenedInfoPopup] = useState(true);
  const [isOpenedErrorPopup, setIsOpenedErrorPop] = useState(false);
  return (
    <>
      <div style={{ display: 'inline-grid', gridGap: '20px' }}>
        <Button kind="primary" size="large" onClick={() => setisOpenedInfoPopup(true)}>
          Open info popup
        </Button>
        <Button kind="primary" size="large" onClick={() => setIsOpenedErrorPop(true)}>
          Open error popup
        </Button>
      </div>
      <Popup
        isOpen={isOpenedInfoPopup}
        type="info"
        onToggle={() => setisOpenedInfoPopup(false)}
        header={<div>Info</div>}
        closeOnFadeClick
      >
        <div style={{ padding: '24px 24px', fontFamily: 'sans-serif' }}>
          <h2>Info popup content</h2>
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
          <CancelButton size="large" onClick={() => setisOpenedInfoPopup(false)}>
            Cancel
          </CancelButton>
        </div>
      </Popup>
      <Popup
        isOpen={isOpenedErrorPopup}
        type="error"
        onToggle={() => setIsOpenedErrorPop(false)}
        header={<h1>Error</h1>}
        closeOnFadeClick
      >
        <div style={{ padding: '24px 24px', fontFamily: 'sans-serif' }}>
          <h2>Error popup content</h2>
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
          <CancelButton size="large" onClick={() => setIsOpenedErrorPop(false)}>
            Cancel
          </CancelButton>
        </div>
      </Popup>
    </>
  );
});
