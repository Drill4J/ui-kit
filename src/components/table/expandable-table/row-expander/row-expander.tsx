import styled, { css } from 'styled-components';

import { COLORS } from '../../../../theme';
import { Icons } from '../../../icon';

interface Props {
  className?: string;
  expanded?: boolean;
  onClick: () => void;
}

export const RowExpander = ({
  className, expanded, onClick,
}: Props) => (
  <Wrapper className={className} onClick={onClick}>
    <IconWrapper expanded={expanded}>
      <Icons.Expander />
    </IconWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div<{ expanded?: boolean }>`
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  
  ${({ expanded }) => expanded && css`transform: rotate(90deg);`}
`;
