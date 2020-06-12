import { useReducer } from 'react';

import { Metrics, QualityGate } from './quality-gate-types';

const initialState: QualityGate = {
  configured: false,
  metrics: {
    coverageIsSet: false,
    risksIsSet: false,
    testsToRunIsSet: false,
    threshold: {
      coverage: 0,
      risks: 0,
    },
  },
  status: 'Warning',
};

export type Action = ReturnType<typeof openSettings
| typeof toggleMetrick
| typeof saveSettings
| typeof onChangeCoverageThreshold
| typeof onChangeRisksThreshold>;

const OPEN_SETTINGS = 'OPEN_SETTINGS';
const TOGGLE_METRICK = 'TOGGLE_METRICK';
const ONCHANGE_COVERAGE_THRESHOLD = 'ONCHANGE_COVERAGE_THRESHOLD';
const ONCHANGE_RISKS_THRESHOLD = 'ONCHANGE_RISKS_THRESHOLD';
const SAVE_SETTINGS = 'SAVE_SETTINGS';

export const openSettings = () => ({ type: OPEN_SETTINGS } as const);
export const toggleMetrick = (metric: keyof Omit<Metrics, 'threshold'>) => ({ type: TOGGLE_METRICK, payload: metric } as const);
export const onChangeCoverageThreshold = (value: number) => ({ type: ONCHANGE_COVERAGE_THRESHOLD, payload: value } as const);
export const onChangeRisksThreshold = (value: number) => ({ type: ONCHANGE_RISKS_THRESHOLD, payload: value } as const);
export const saveSettings = (metrics: Metrics) => ({ type: SAVE_SETTINGS, payload: metrics } as const);

export const reducer = (state: QualityGate, action: Action): QualityGate => {
  switch (action.type) {
    case OPEN_SETTINGS:
      return { ...state, configured: false };
    case TOGGLE_METRICK:
      return {
        ...state,
        metrics: {
          ...state.metrics,
          [action.payload]: !state.metrics[action.payload],
        },
      };
    case ONCHANGE_COVERAGE_THRESHOLD:
      return {
        ...state,
        metrics: {
          ...state.metrics,
          threshold: { ...state.metrics.threshold, coverage: action.payload },
        },
      };
    case ONCHANGE_RISKS_THRESHOLD:
      return {
        ...state,
        metrics: {
          ...state.metrics,
          threshold: { ...state.metrics.threshold, risks: action.payload },
        },
      };
    case SAVE_SETTINGS:
      return { ...state, configured: true, metrics: action.payload };
    default:
      return state;
  }
};

export const useQualityGate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
