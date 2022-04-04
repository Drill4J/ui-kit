import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Modal } from './modal';
import { Button } from '../forms';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story = () => (
  <div tw="justify-center w-[368px] h-[368px]">
    <Modal>
      {({ setIsOpen, isOpen }) => (
        <>
          <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </Button>
          <Modal.Content>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button primary size="large" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </>
      )}
    </Modal>
  </div>
);
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<Modal>\n' +
        '      {({ setIsOpen, isOpen }) => (\n' +
        '        <>\n' +
        '          <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>\n' +
        '            {isOpen ? \'Close\' : \'Open\'}\n' +
        '          </Button>\n' +
        '          <Modal.Content type={type} closeOnFadeClick={closeOnFadeClick}>\n' +
        '            <Modal.Header>Header</Modal.Header>\n' +
        '            <Modal.Body>\n' +
        '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus.</p>\n' +
        '              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia exce quas nostrum?</p>\n' +
        '              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>\n' +
        '            </Modal.Body>\n' +
        '            <Modal.Footer>\n' +
        '              <Button primary size="large" onClick={() => setIsOpen(false)}>\n' +
        '                Close\n' +
        '              </Button>\n' +
        '            </Modal.Footer>\n' +
        '          </Modal.Content>\n' +
        '        </>\n' +
        '      )}\n' +
        '    </Modal>',
    },
  },
};
