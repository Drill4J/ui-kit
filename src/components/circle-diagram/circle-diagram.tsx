import { BEM } from '@redneckz/react-bem-helper';

import styles from './circle-diagram.module.scss';

interface CircleDiagramValues {
  coverage: number;
  diameter: number;
  strokeWidth: number;
}

interface Props {
  className?: string;
  values: CircleDiagramValues;
  children?: React.ReactNode;
}

const circleDiagram = BEM(styles);

export const CircleDiagram = circleDiagram(({
  className, values: { coverage, diameter, strokeWidth }, children,
}: Props) => {
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = diameter / 2;

  const coverageOffset = ((100 - coverage) / 100) * circumference;

  return (
    <div className={className}>
      <svg
        width={diameter}
        height={diameter}
        transform="rotate(-90)"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          type="coverage"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={coverageOffset}
        />
      </svg>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </div>
  );
});

const ChildrenWrapper = circleDiagram.childrenWrapper('div');
