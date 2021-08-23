import { storiesOf } from '@storybook/react';
import MiddleEllipsis from 'react-middle-ellipsis';
import 'twin.macro';

storiesOf('TextOverflowCenter', module)
  .add('TextOverflowCenter', () => {
    const longText =
        'https://thisIsAVeryLongUrl/that/needs/to/be/truncated/in/the/middle/so/that/the/important/end/matter/is/preserved/here.html';

    return (
      <div
        style={{
          padding: '100px',
          fontFamily: 'sans-serif',
          lineHeight: '2em',
        }}
      >
        <div>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
        <div style={{ width: '550px', maxWidth: '100%' }}>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
        <div style={{ width: '450px', maxWidth: '100%' }}>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
        <div style={{ width: '350px', maxWidth: '100%' }}>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
        <div style={{ width: '250px', maxWidth: '100%' }}>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
        <div style={{ width: '150px', maxWidth: '100%' }}>
          <MiddleEllipsis>
            <span>{longText}</span>
          </MiddleEllipsis>
        </div>
      </div>
    );
  });
