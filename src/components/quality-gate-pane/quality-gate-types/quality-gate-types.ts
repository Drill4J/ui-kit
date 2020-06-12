export type Status = 'Passed' | 'Warning' | 'Failed';

interface Threshold {
  coverage: number;
  risks: number;
}

export interface Metrics {
  coverageIsSet: boolean;
  risksIsSet: boolean;
  testsToRunIsSet: boolean;
  threshold: Threshold;
}

export interface QualityGate {
  configured: boolean;
  metrics: Metrics;
  status: Status;
}
