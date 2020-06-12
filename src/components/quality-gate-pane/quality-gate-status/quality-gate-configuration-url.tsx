import * as React from 'react';
import { BEM, span } from '@redneckz/react-bem-helper';

import { Panel } from '../../../layouts';
import { adminUrl } from './admin-url';

import styles from './quality-gate-configuration-url.module.scss';

interface Props {
  className?: string;
  agentId: string;
  pluginId: string;
  agentType?: string;
}

const qualityGateConfigurationUrl = BEM(styles);

export const QualityGateConfigurationUrl = qualityGateConfigurationUrl(
  ({
    className, agentId, pluginId, agentType,
  }: Props) => (
    <span className={className}>
      <div>
        <CurlFlag>
          curl&nbsp;
          <CurlFlag color="red">-</CurlFlag>
          i&nbsp;
          <CurlFlag color="red">-</CurlFlag>
          H&nbsp;
        </CurlFlag>
        &quot;accept: application/json&quot;
        <CurlFlag> \</CurlFlag>
      </div>
      <div>
        <CurlFlag>
          &nbsp;
          <CurlFlag color="red">-</CurlFlag>
          H&nbsp;
        </CurlFlag>
        &quot;content-type: application/json&quot;
        <CurlFlag> \</CurlFlag>
      </div>
      <Panel verticalAlign="start">
        <CurlFlag>
          &nbsp;
          <CurlFlag color="red">
            -
            <CurlFlag>X</CurlFlag>
          </CurlFlag>
          <CurlFlag invisible>\</CurlFlag>
        </CurlFlag>
        <span>
          <CurlFlag> GET </CurlFlag>
          {`${adminUrl}api/${agentType === 'ServiceGroup'
            ? 'service-groups' : 'agents'}/${agentId}/plugins/${pluginId}/data/tests-to-run`}
        </span>
      </Panel>
    </span>
  ),
);

const CurlFlag = qualityGateConfigurationUrl.curlFlag(span({} as {invisible?: boolean; color?: 'red'}));
