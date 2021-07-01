import tw, { styled, css } from 'twin.macro';
import { useEffect, useRef, useState } from 'react';

import { Icons } from '../icon';
import { Portal } from '../portal';

interface Props {
  children: React.ReactChild;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const Modal = ({ children, onToggle, isOpen }: Props) => {
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
        <div tw="flex w-full h-full justify-center items-center">
          <ModalCard width={modalWidth}>
            <CloseButton tw="cursor-pointer" onClick={() => onToggle(!isOpen)} data-test="modal:close-button">
              <Icons.Close />
            </CloseButton>
            <BorderLeft ref={borderRef} />
            {children}
          </ModalCard>
          <Fade onClick={() => onToggle(!isOpen)} />
        </div>
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
  ${tw`bg-blue-default`};
  cursor: col-resize;
`;

const ModalCard = styled.div<{width: number}>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  ${tw`bg-monochrome-white`}
  min-width: 400px;
  max-width: calc(100% - 48px); // closeButton widths
  ${({ width }) => css`width: ${width}px`}
`;

const CloseButton = styled.div`
  ${tw`absolute flex items-center justify-center h-12 w-12 bg-blue-default text-monochrome-white`};
  left: -48px;
  border-radius: 24px 0 0 24px;
`;

const Fade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white`};
  opacity: 0.75;
  z-index: 90;
`;
