import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Input } from '../../../forms/inputs/input';
import { Checkbox } from '../../../forms/inputs/checkbox';
import { Panel } from '../../../layouts';
import { Icons } from '../../icon';
import { Tooltip } from '../../tooltip';
import { Metrics } from '../quality-gate-types';
import {
  toggleMetrick, onChangeCoverageThreshold, onChangeRisksThreshold, Action,
} from '../useQualityGate';

import styles from './quality-gate-settings.module.scss';

interface Props {
  className?: string;
  metrics: Metrics;
  dispatch: React.Dispatch<Action>;
}

const qualityGateSettings = BEM(styles);

export const QualityGateSettings = qualityGateSettings(
  ({
    className,
    metrics: {
      coverageIsSet, risksIsSet, testsToRunIsSet, threshold,
    },
    dispatch,
  }: Props) => {
    const [error, setError] = React.useState('');
    const handleChangeCoverageThreshold = ({ target: { validity, value } }: React.ChangeEvent<HTMLInputElement>) => {
      validity.valid ? dispatch(onChangeCoverageThreshold(+value)) : dispatch(onChangeCoverageThreshold(0.1));
    };
    const handleChangeRisksThreshold = ({ target: { validity, value } }: React.ChangeEvent<HTMLInputElement>) => {
      validity.valid && dispatch(onChangeRisksThreshold(+value));
    };

    return (
      <div className={className}>
        <PassConditions>
          <GridWrapper>
            <Checkbox checked={coverageIsSet} onChange={() => dispatch(toggleMetrick('coverageIsSet'))} />
            <Condtion>
              Build coverage
              <CondtionStatus>
                Minimum percentage of build covered by tests
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </CondtionStatus>
            </Condtion>
            <Input
              type="text"
              textAlign="right"
              value={coverageIsSet ? setValidValue(threshold.coverage) : ''}
              onChange={handleChangeCoverageThreshold}
              disabled={!coverageIsSet}
              pattern="[0-9.]*"
              paneField
              error={coverageIsSet && !!error}
            />
            <Percentage>%</Percentage>
          </GridWrapper>
          <GridWrapper>
            <Checkbox checked={risksIsSet} onChange={() => dispatch(toggleMetrick('risksIsSet'))} />
            <Condtion>
              <Panel>
                Risks
                <RisksInfoIcon
                  message={(
                    <Panel direction="column">
                      <span>Try to cover all of your risks in current build.</span>
                      <span>Uncovered risks won’t be counted in your next build.</span>
                    </Panel>
                  )}
                >
                  <Icons.Info width={12} height={12} />
                </RisksInfoIcon>
              </Panel>
              <CondtionStatus>
                Maximum number of risks in the build
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </CondtionStatus>
            </Condtion>
            <Input
              type="text"
              textAlign="right"
              value={risksIsSet ? threshold.risks : ''}
              onChange={handleChangeRisksThreshold}
              disabled={!risksIsSet}
              pattern="[0-9]*"
              paneField
              error={risksIsSet && !!error}
            />
          </GridWrapper>
          <GridWrapper>
            <Checkbox checked={testsToRunIsSet} onChange={() => dispatch(toggleMetrick('testsToRunIsSet'))} />
            <Condtion>
              Suggested “Tests to run” executed
              <CondtionStatus>
                All tests to run should be executed
              </CondtionStatus>
            </Condtion>
          </GridWrapper>
        </PassConditions>
      </div>
    );
  },
);

const PassConditions = qualityGateSettings.passConditions('div');
const GridWrapper = qualityGateSettings.gridWrapper('div');
const Condtion = qualityGateSettings.condtion('div');
const CondtionStatus = qualityGateSettings.condtionStatus('div');
const ErrorMessage = qualityGateSettings.errorMessage('div');
const Percentage = qualityGateSettings.percentage('div');
const RisksInfoIcon = qualityGateSettings.risksInfoIcon(Tooltip);

function setValidValue(value: number): number {
  if (value === 0) return 0.1;
  if (value > 100) return 100;
  return value;
}
