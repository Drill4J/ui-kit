import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Panel } from '../../layouts';

import styles from './card.module.scss';

export interface Methods {
  totalCount?: number;
  coveredCount?: number;
  risksCount?: number;
  coveredFromTotalCount?: number;
  currentBuildCoverage?: number;
  overlappedCoverage?: number;
  activeScopeCoverage?: number;
  methodsType?: string;
}

interface Props {
  className?: string;
  icon: React.ReactNode;
  methods: Methods;
}

const card = BEM(styles);

export const Card = card(({
  className, icon, methods:
    {
      totalCount = 0, coveredCount = 0, risksCount = 0, coveredFromTotalCount = 0,
      currentBuildCoverage = 0,
      overlappedCoverage = 0,
      activeScopeCoverage = 0,
      methodsType = '',
    },
}: Props) => (
  <div className={className}>
    <Panel>
      {icon}
      <MethodsType>{methodsType}</MethodsType>
    </Panel>
    <TotalMethods>{totalCount}</TotalMethods>
    <InfoPanel align="space-between">
      <span>
        <Coverage>{coveredCount}</Coverage>
        {`/${totalCount}`}
      </span>
      {risksCount > 0 && (
        <Risks>{`${risksCount} risks`}</Risks>
      )}
    </InfoPanel>
    <CoverageBar>
      <CurrentBuild style={{ width: `${currentBuildCoverage}%` }} />
      <OverlappedCoverage style={{ width: `${overlappedCoverage}%`, marginLeft: `${currentBuildCoverage - overlappedCoverage}%` }} />
      <ActiveScope style={{ width: `${activeScopeCoverage}%`, marginLeft: `${currentBuildCoverage - overlappedCoverage}%` }} />
    </CoverageBar>
    <Panel align="space-between">
      <span>Covered</span>
      <Coverage>{`${coveredFromTotalCount}%`}</Coverage>
    </Panel>
  </div>
));

const MethodsType = card.methodsType('span');
const TotalMethods = card.totalMethods('div');
const InfoPanel = card.infoPanel(Panel);
const Risks = card.risks('span');
const CoverageBar = card.coverageBar('div');
const CurrentBuild = card.currentBuild('span');
const OverlappedCoverage = card.overlappedCoverage('span');
const ActiveScope = card.activeScope('span');
const Coverage = card.coverage('span');
