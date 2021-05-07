import styled from 'styled-components';

import { Button } from '../button';
import { COLORS, FONTS } from '../../../../theme';

export const LinkButton = styled(Button)`
  display: inline-flex;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  font-family: ${FONTS.SEMI_BOLD};
  
  &:hover {
    color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
  }

  &:active {
    color: ${COLORS.PRIMARY_BLUE.SHADE};
  }
`;
