import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Panel } from './panel';
import { Button } from '../../drill4j-ui-kit';

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const Template: Story = () => (
  <Panel>
    {({ isOpen, setIsOpen }) => (
      <>
        <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </Button>
        <Panel.Content>
          <Panel.Header>
            <h2>Panel header</h2>
          </Panel.Header>
          <Panel.SubHeader>
            <h3>Panel header</h3>
          </Panel.SubHeader>
          <Panel.Body tw="px-4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
          </Panel.Body>
          <Panel.Footer>
            Panel Footer
          </Panel.Footer>
        </Panel.Content>
      </>
    )}
  </Panel>
);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<Panel>\n' +
        '    {({ isOpen, setIsOpen }) => (\n' +
        '      <>\n' +
        '        <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>\n' +
        '          {isOpen ? \'Close\' : \'Open\'}\n' +
        '        </Button>\n' +
        '        <Panel.Content>\n' +
        '          <Panel.Header>\n' +
        '            <h2>Panel header</h2>\n' +
        '          </Panel.Header>\n' +
        '          <Panel.Body tw="px-4">\n' +
        '            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia aliquid quas n?</p>\n' +
        '            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>\n' +
        '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>\n' +
        '          </Panel.Body>\n' +
        '          <Panel.Footer>\n' +
        '            Panel Footer\n' +
        '          </Panel.Footer>\n' +
        '        </Panel.Content>\n' +
        '      </>\n' +
        '    )}\n' +
        '  </Panel>',
    },
  },
};
