import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Panel } from '../../layouts';

import styles from './card.module.scss';

export interface Methods {
  methodsType: string;
  totalCount: number;
  risksCount?: number;
  coveredCount: number;
}

interface Props {
  className?: string;
  methods: Methods;
}

const card = BEM(styles);

export const Card = card(({
  className, methods: {
    methodsType, totalCount, risksCount, coveredCount,
  },
}: Props) => (
  <div className={className}>
    <Panel align="space-between">
      <MethodsType data-test={`card:methods-type:${methodsType}`}>{methodsType}</MethodsType>
      {typeof risksCount !== 'undefined' && (
        <RisksCount data-test={`card:risks-count:${methodsType}`}>
          {`${risksCount} risks`}
        </RisksCount>
      )}
    </Panel>
    <div>
      <Panel align="space-between">
        <CoveredCount data-test={`card:covered-count:${methodsType}`}>{coveredCount}</CoveredCount>
        <TotalMethods data-test={`card:total-methods:${methodsType}`}>{totalCount}</TotalMethods>
      </Panel>
      <CoverageBar>
        <Progress style={{ width: `${(coveredCount / totalCount) * 100}%` }} />
      </CoverageBar>
    </div>
  </div>
));

const MethodsType = card.methodsType('span');
const RisksCount = card.risksCount('span');
const CoveredCount = card.coveredCount('span');
const TotalMethods = card.totalMethods('span');
const CoverageBar = card.coverageBar('div');
const Progress = card.progress('div');
