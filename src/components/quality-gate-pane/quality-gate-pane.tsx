import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { QualityGateStatus } from './quality-gate-status';
import { QualityGateSettings } from './quality-gate-settings';
import { Button } from '../../forms/inputs/button';
import { Modal } from '../modal';
import { Badge } from '../badge';
import { GeneralAlerts } from '../general-alerts';
import { openSettings, saveSettings, Action } from './useQualityGate';
import { QualityGate, Status } from './quality-gate-types';

import styles from './quality-gate-pane.module.scss';

interface BuildVersion {
  coverage: number;
  risks: number;
  testsToRun: number;
}

interface Props {
  className?: string;
  isOpen: boolean;
  onToggle: (value: boolean) => void;
  qualityGate: QualityGate;
  buildVersion: BuildVersion;
  dispatch: React.Dispatch<Action>;
}

const qualityGatePane = BEM(styles);

export const QualityGatePane = qualityGatePane(
  ({
    className,
    isOpen,
    onToggle,
    qualityGate: {
      configured, metrics, status,
    },
    buildVersion,
    dispatch,
  }: Props) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    return (
      <Modal isOpen={isOpen} onToggle={onToggle}>
        <div className={className}>
          <Header>
            <span>Quality Gate</span>
            {configured && <Badge color={getStatusColor(status)} bold>{status}</Badge>}
          </Header>
          <InfoPanel>
            {configured
              ? <span>Meet all these conditions to pass the quality gate.</span>
              : <span>Choose the metrics and define their threshold.</span>}
          </InfoPanel>
          {errorMessage && (
            <GeneralAlerts type="ERROR">
              On-submit error. Server problem or operation could not be processed in real-time
            </GeneralAlerts>
          )}
          {configured
            ? (
              <QualityGateStatus
                coverage={buildVersion.coverage}
                risks={buildVersion.risks}
                testsToRun={buildVersion.testsToRun}
                metrics={metrics}
              />
            )
            : <QualityGateSettings metrics={metrics} dispatch={dispatch} />}
          <ButtonGroup>
            <Button
              type="primary"
              size="large"
              onClick={configured
                ? () => dispatch(openSettings())
                : () => dispatch(saveSettings(metrics))}
              disabled={!metrics.coverageIsSet && !metrics.risksIsSet && !metrics.testsToRunIsSet}
            >
              {configured ? 'Edit' : 'Save'}
            </Button>
            <Button type="secondary" size="large" onClick={() => onToggle(false)}>
              Close
            </Button>
          </ButtonGroup>
        </div>
      </Modal>
    );
  },
);

const Header = qualityGatePane.header('div');
const InfoPanel = qualityGatePane.infoPanel('div');
const ButtonGroup = qualityGatePane.buttonGroup('div');

function getStatusColor(status: Status) {
  switch (status) {
    case 'Passed':
      return 'green';
    case 'Warning':
      return 'orange';
    case 'Failed':
      return 'red';
    default:
      return 'red';
  }
}
