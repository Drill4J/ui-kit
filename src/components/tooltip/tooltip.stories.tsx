import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Tooltip } from './tooltip';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <>
    <div tw="my-10 mx-20">
      <Tooltip message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero">
        Tooltip
        <div>top-right</div>
      </Tooltip>
    </div>
    <div tw="my-16 mx-30">
      <Tooltip
        message={(
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
    <div tw="my-20 mx-100">
      <Tooltip
        position="right"
        message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo..."
      >
        Tooltip
        <div>right</div>
      </Tooltip>
    </div>
    <div tw="my-20 mx-100">
      <Tooltip
        position="left"
        message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo..."
      >
        Tooltip
        <div>left</div>
      </Tooltip>
    </div>
    <div tw="my-20 mx-100">
      <Tooltip
        position="top-left"
        message="Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo..."
      >
        Tooltip
        <div>top-left</div>
      </Tooltip>
    </div>
  </>
));
