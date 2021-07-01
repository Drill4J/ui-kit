import styled, { css } from 'styled-components';
import { useEffect, useRef, useState } from 'react';

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
}: Props) => {
  const borderRef = useRef(null);
  const [modalWidth, setModalWidth] = useState(400);

  function handleMouseMove({ clientX }: MouseEvent) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    setModalWidth(window.innerWidth - clientX - scrollBarWidth);
  }
  function handleMouseDown({ target }: MouseEvent) {
    if (target === borderRef.current) {
      document.addEventListener('mousemove', handleMouseMove);
    }
  }
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  return (
    <Portal rootElementId="modal">
      {isOpen && (
        <Wrapper className={className}>
          <ModalCard width={modalWidth}>
            <CloseButton onClick={() => onToggle(!isOpen)} data-test="modal:close-button">
              <Icons.Close />
            </CloseButton>
            <BorderLeft ref={borderRef} />
            {children}
          </ModalCard>
          <Fade onClick={() => onToggle(!isOpen)} />
        </Wrapper>
      )}
    </Portal>
  );
};

const BorderLeft = styled.div`
  position: absolute;
  z-index: 100;
  width: 4px;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow:  -20px 0 40px 0 rgba(15, 36, 52, 0.15);
  background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  cursor: col-resize;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div<{width: number}>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  background-color: ${COLORS.MONOCHROME.WHITE};
  min-width: 400px;
  max-width: calc(100% - 48px); // closeButton widths
  ${({ width }) => css`width: ${width}px`}
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
