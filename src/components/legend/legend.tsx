import styled from 'styled-components';
import { COLORS } from '../../theme';

interface LegendItem {
  color: string;
  borderColor?: string;
  label: React.ReactNode;
}

interface Props {
  className?: string;
  legendItems: LegendItem[];
}

export const Legend = ({ className, legendItems }: Props) => (
  <Wrapper className={className}>
    {legendItems.map(({ color, label, borderColor }) => (
      <Item key={color}>
        <svg width={10} height={10}>
          <circle cx="5" cy="5" r="4.5" fill={color} stroke={borderColor} />
        </svg>
        {label}
      </Item>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.MONOCHROME.DEFAULT};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
