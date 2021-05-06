import styled, { css } from 'styled-components';

import { Icons } from '../icon';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
  order: 'ASC' | 'DESC' | null;
  active?: boolean;
}

export const SortArrow = ({ className, order, active }: Props) => (
  <Wrapper className={className} active={active}>
    <Icons.SortingArrow rotate={order === 'DESC' ? 0 : 180} />
  </Wrapper>
);

const Wrapper = styled.div<{active?: boolean}>`
  position: absolute;
  left: -16px;
  display: grid;
  place-items: center;
  height: 16px;
  width: 16px;
  color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
  cursor: pointer;
  
  ${({ active }) => active && css`color: ${COLORS.PRIMARY_BLUE.SHADE}`}
`;
