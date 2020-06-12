import React from 'react';
import { storiesOf } from '@storybook/react';

import { QualityGatePane } from './quality-gate-pane';
import { Button } from '../../forms/inputs/button/button';
import { useQualityGate } from './useQualityGate';
import { Status } from './quality-gate-types';

storiesOf('QualityGatePane', module)
  .add('QualityGatePane', () => {
    const buildVersion = {
      coverage: 20,
      risks: 10,
      testsToRun: 0,
    };
    const { state, dispatch } = useQualityGate();
    const [isOpen, setIsOpen] = React.useState(true);

    const conditions = [
      buildVersion.coverage >= state.metrics.threshold.coverage,
      buildVersion.risks <= state.metrics.threshold.risks,
      buildVersion.testsToRun === 0];

    const setStatus = (): Status => {
      if (conditions.every(condition => condition === true)) {
        return 'Passed';
      }
      if (conditions.every(condition => condition === false)) {
        return 'Failed';
      }
      return 'Warning';
    };

    const qualityGate = { ...state, status: setStatus() };

    return (
      <>
        <Button type="primary" size="small" onClick={() => setIsOpen(true)}>
          {qualityGate.configured ? `${qualityGate.status}` : 'Configure'}
        </Button>
        <QualityGatePane
          isOpen={isOpen}
          onToggle={() => setIsOpen(false)}
          qualityGate={qualityGate}
          buildVersion={buildVersion}
          dispatch={dispatch}
        />
      </>
    );
  });
