import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { QualityGateConfigurationUrl } from './quality-gate-configuration-url';
import { Panel } from '../../../layouts';
import { Icons } from '../../icon';
import { Metrics } from '../quality-gate-types';

import styles from './quality-gate-status.module.scss';

interface Props {
  className?: string;
  coverage: number;
  risks: number;
  testsToRun: number;
  metrics: Metrics;
}

const qualityGateStatus = BEM(styles);

export const QualityGateStatus = qualityGateStatus(
  ({
    className,
    coverage = 0,
    risks = 0,
    testsToRun = 0,
    metrics,
  }: Props) => (
    <div className={className}>
      <PassConditions>
        {metrics.coverageIsSet && (
          <Panel>
            {coverage >= metrics.threshold.coverage ? <Passed width={16} height={16} /> : <Failed width={16} height={16} />}
            <Condtion>
              Build coverage
              <CondtionStatus>
                {coverage >= metrics.threshold.coverage ? 'Passed. ' : 'Failed. '}
                Your coverage is&nbsp;
                <Value>{coverage}</Value>
                %
              </CondtionStatus>
            </Condtion>
            <Value>{`${metrics.threshold.coverage}%`}</Value>
          </Panel>
        )}
        {metrics.risksIsSet && (
          <Panel>
            {risks <= metrics.threshold.risks ? <Passed width={16} height={16} /> : <Failed width={16} height={16} />}
            <Condtion>
              Risks
              <CondtionStatus>
                {risks <= metrics.threshold.risks ? 'Passed. ' : 'Failed. '}
                You have&nbsp;
                <Value>{risks}</Value>
                &nbsp;risks
              </CondtionStatus>
            </Condtion>
            <Value>{metrics.threshold.risks}</Value>
          </Panel>
        )}
        {metrics.testsToRunIsSet && (
          <Panel>
            {testsToRun === 0 ? <Passed width={16} height={16} /> : <Failed width={16} height={16} />}
            <Condtion>
              Suggested “Tests to run” executed
              <CondtionStatus>
                {testsToRun === 0
                  ? 'Passed. You have executed all tests to run'
                  : (
                    <>
                      Failed. You have&nbsp;
                      <Value>{testsToRun}</Value>
                      &nbsp;not executed tests to run
                    </>
                  )}
              </CondtionStatus>
            </Condtion>
          </Panel>
        )}
      </PassConditions>
      <NotificaitonPanel>
        <span>
          This is quality gate configuration for this build.
          Use this Curl in your command line to get JSON:
        </span>
        <CommandWrapper verticalAlign="end">
          <QualityGateConfigurationUrl agentId="agentId" pluginId="pluginId" agentType="agentType" />
          <CopyIcon onClick={() => {}} />
        </CommandWrapper>
      </NotificaitonPanel>
    </div>
  ),
);

const PassConditions = qualityGateStatus.passConditions('div');
const Condtion = qualityGateStatus.condtion('div');
const Passed = qualityGateStatus.passed(Icons.Checkbox);
const Failed = qualityGateStatus.failed(Icons.Warning);
const CondtionStatus = qualityGateStatus.condtionStatus('div');
const Value = qualityGateStatus.value('span');
const NotificaitonPanel = qualityGateStatus.notificationPanel('div');
const CommandWrapper = qualityGateStatus.commandWrapper(Panel);
const CopyIcon = qualityGateStatus.copyIcon(Icons.Copy);
