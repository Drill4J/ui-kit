import styled from 'styled-components';

import { Icons } from '../icon';
import { Portal } from '../portal';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
  children: React.ReactChild;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const Modal = ({
  className, children, onToggle, isOpen,
}: Props) => (
  <Portal rootElementId="modal">
    {isOpen && (
      <Wrapper className={className}>
        <ModalCard>
          <CloseButton onClick={() => onToggle(!isOpen)}>
            <Icons.Close />
          </CloseButton>
          {children}
        </ModalCard>
        <Fade onClick={() => onToggle(!isOpen)} />
      </Wrapper>
    )}
  </Portal>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  z-index: 100;
  box-shadow: -4px 0 0 0 ${COLORS.PRIMARY_BLUE.DEFAULT}, -20px 0 40px 0 rgba(15, 36, 52, 0.15);
  background-color: ${COLORS.MONOCHROME.WHITE};
`;
const CloseButton = styled.div`
  position: absolute;
  left: -48px;
  height: 48px;
  width: 48px;
  border-radius: 24px 0 0 24px;
  background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  color: ${COLORS.MONOCHROME.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Fade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.75;
  background-color: ${COLORS.MONOCHROME.WHITE};
  z-index: 90;
`;
