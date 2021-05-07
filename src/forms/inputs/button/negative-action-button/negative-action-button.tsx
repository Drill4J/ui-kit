import styled from 'styled-components';

import { Button } from '../button';
import { COLORS, FONTS } from '../../../../theme';

export const NegativeActionButton = styled(Button)`
  border: 1px solid ${COLORS.RED.DEFAULT};
  background-color: ${COLORS.RED.DEFAULT};
  color: ${COLORS.MONOCHROME.WHITE};
  font-family: ${FONTS.SEMI_BOLD};

  &:hover {
    border: 1px solid ${COLORS.RED.MEDIUM_TINT};
    background-color: ${COLORS.RED.MEDIUM_TINT};
  }

  &:active {
    border: 1px solid ${COLORS.RED.SHADE};
    background-color: ${COLORS.RED.SHADE};
  }
`;
