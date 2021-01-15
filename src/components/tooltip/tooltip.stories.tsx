import { storiesOf } from '@storybook/react';

import { Tooltip } from './tooltip';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <>
    <div style={{ margin: '50px 100px' }}>
      <Tooltip message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero">
        Tooltip
        <div>top-right</div>
      </Tooltip>
    </div>
    <div style={{ margin: '50px 200px' }}>
      <Tooltip message={(
        <>
          <div>
            <div>
              <div>Lorem ipsum dolor sit amet</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>Consequatur rerum amet fuga expedita</div>
          </div>
          <div>
            <div>
              <div>Lorem ipsum dolor sit amet</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>Consequatur rerum amet fuga expedita</div>
          </div>
        </>
      )}
      >
        Tooltip
        <div>top-center</div>
      </Tooltip>
    </div>
    <div style={{ margin: '50px 600px' }}>
      <Tooltip position="right" message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo...">
        Tooltip
        <div>right</div>
      </Tooltip>
    </div>
    <div style={{ margin: '50px 600px' }}>
      <Tooltip position="left" message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo...">
        Tooltip
        <div>left</div>
      </Tooltip>
    </div>
    <div style={{ margin: '50px 600px' }}>
      <Tooltip message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo...">
        Tooltip
        <div>top-left</div>
      </Tooltip>
    </div>
  </>
));
