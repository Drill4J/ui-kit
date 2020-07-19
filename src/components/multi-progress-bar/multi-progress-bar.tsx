import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Legends } from '../legends';
import { ProgressBar } from '../progress-bar';
import { StripedProgressBar } from '../striped-progress-bar';
import { Tooltip } from '../tooltip';
import { useElementSize } from '../../hooks';

import styles from './multi-progress-bar.module.scss';

interface Props {
  className?: string;
  value?: number;
  newValue?: number;
  overlappedValue?: number;
  active?: boolean;
}

const multiProgressBar = BEM(styles);

export const MultiProgressBar = multiProgressBar(({
  className, value = 0, newValue = 0, overlappedValue = 0, active,
}: Props) => {
  const node = React.useRef<HTMLDivElement>(null);
  const { width } = useElementSize(node);

  return (
    <div className={className} ref={node}>
      <div style={{ position: 'relative', width: `${value * (width / 100)}px` }}>
        <MultiProgressBarTooltip
          customStyle={{ bottom: '40px', left: '50%' }}
          position="top"
          message={(
            <Message>
              <div>
                {`${value}% of current build`}
              </div>
              <div>have been already covered by tests.</div>
            </Message>
          )}
        >
          <ProgressBar value={`${value * (width / 100)}px`} />
        </MultiProgressBarTooltip>
      </div>
      <Legends />
      <OverlappingValueProgressBar
        style={{ left: `${value - overlappedValue}%`, width: `${overlappedValue * (width / 100)}px` }}
      >
        <MultiProgressBarTooltip
          customStyle={{ top: '30px', left: '50%', height: '50px' }}
          position="bottom"
          message={(
            <Message style={{ transform: 'scale(-1)' }}>
              <div>
                {`${overlappedValue}% of current build`}
              </div>
              <div>were overlapped in active scope.</div>
            </Message>
          )}
        >
          {active
            ? <StripedProgressBar type="OVERLAPPING" value={`${overlappedValue * (width / 100)}px`} />
            : <ProgressBar type="OVERLAPPING" value={`${overlappedValue * (width / 100)}px`} />}
        </MultiProgressBarTooltip>
      </OverlappingValueProgressBar>
      <NewValueProgressBar style={{ left: `${value}%`, width: `${newValue * (width / 100)}px` }}>
        <MultiProgressBarTooltip
          customStyle={{ bottom: '30px', left: '50%' }}
          position="top"
          message={(
            <Message>
              <div>
                {`Active scope has covered +${newValue}%.`}
              </div>
              <div>Finish your scope to add it to your total build coverage.</div>
            </Message>
          )}
        >
          {active
            ? <StripedProgressBar type="SCOPE" value={`${newValue * (width / 100)}px`} />
            : <ProgressBar type="SCOPE" value={`${newValue * (width / 100)}px`} />}
        </MultiProgressBarTooltip>
      </NewValueProgressBar>
    </div>
  );
});

const MultiProgressBarTooltip = multiProgressBar.multiProgressBarTooltip(Tooltip);
const Message = multiProgressBar.message('div');
const NewValueProgressBar = multiProgressBar.newValueProgressBar('div');
const OverlappingValueProgressBar = multiProgressBar.overlappingValueProgressBar('div');
