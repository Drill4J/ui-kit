import { BEM } from '@redneckz/react-bem-helper';

import styles from './legend.module.scss';

interface LegendItem {
  color: string;
  borderColor?: string;
  label: React.ReactNode;
}

interface Props {
  className?: string;
  legendItems: LegendItem[];
}

const legend = BEM(styles);

export const Legend = legend(({ className, legendItems }: Props) => (
  <span className={className}>
    {legendItems.map(({ color, label, borderColor }) => (
      <Item key={color}>
        <svg width={10} height={10}>
          <circle cx="5" cy="5" r="4.5" fill={color} stroke={borderColor} />
        </svg>
        {label}
      </Item>
    ))}
  </span>
));

const Item = legend.item('div');
