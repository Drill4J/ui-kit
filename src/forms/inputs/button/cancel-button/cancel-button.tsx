import styled from 'styled-components';

import { Button } from '../button';
import { COLORS, FONTS } from '../../../../theme';

export const CancelButton = styled(Button)`
  border: 1px solid ${COLORS.RED.DEFAULT};
  background-color: ${COLORS.MONOCHROME.WHITE};
  color: ${COLORS.RED.DEFAULT};
  font-family: ${FONTS.SEMI_BOLD};

  &:hover {
    border: 1px solid ${COLORS.RED.MEDIUM_TINT};
    color: ${COLORS.RED.MEDIUM_TINT};
  }

  &:active {
    border: 1px solid ${COLORS.RED.SHADE};
    color: ${COLORS.RED.SHADE};
  }
`;
