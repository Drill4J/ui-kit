import React, {
  createContext, useContext, useState,
} from 'react';
import tw, { styled, css } from 'twin.macro';

import { Portal } from '../portal';
import { Icons } from '../icon';

type State = {isOpen: boolean; setIsOpen: (value: boolean) => void; onClose: () => void};
type Children = React.ReactChild | React.ReactChild[] | React.FC<State>;
const defaultContextState: State = { isOpen: false, setIsOpen: () => {}, onClose: () => {} };

const ModalContext = createContext<State>(defaultContextState);

interface ModalProps {
  children: Children;
  onClose?: () => void;
  isOpen?: boolean;
}

export const Modal = ({ children, isOpen: defaultState = true, onClose = () => {} }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, onClose }}>
      {typeof children === 'function' ? children({ setIsOpen, isOpen, onClose }) : children}
    </ModalContext.Provider>
  );
};

export interface PanelProps {
  type?: 'info' | 'error';
  closeOnFadeClick?: boolean;
}

const ModalContent: React.FC<PanelProps> = ({
  children, type, closeOnFadeClick = true, ...rest
}) => {
  const { isOpen, setIsOpen, onClose } = useContext(ModalContext);
  const closeHandler = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Portal rootElementId="modal" displayContent={isOpen}>
      <>
        <Content type={type} {...rest}>{children}</Content>
        <Fade onClick={() => closeOnFadeClick && closeHandler()} data-test="modal:fade" />
      </>
    </Portal>
  );
};

const Content = styled.div<PanelProps>`
  ${tw`absolute top-1/2 left-1/2 z-[150] bg-monochrome-white`}
  ${tw`-translate-x-1/2 -translate-y-1/2`}

  ${({ type }) => [
    type === 'info' && css`box-shadow: 0 -4px 0 0 #007fff, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
    type === 'error' && css`box-shadow: 0 -4px 0 0 #ee0000, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
  ]}
`;

const Fade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-black z-[130] opacity-40`};
`;

const Header: React.FC = ({ children, ...rest }) => {
  const { setIsOpen, onClose } = useContext(ModalContext);
  const closeHandler = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <div
      tw="
        flex justify-between items-center min-h[64px] px-6 py-4
        border-b border-monochrome-medium-tint
        text-20 leading-32 text-monochrome-black"
      {...rest}
    >
      {children}
      <Icons.Close tw="cursor-pointer" onClick={() => closeHandler()} data-test="modal:close-button" />
    </div>
  );
};

const Footer = styled.div`
  ${tw`pt-9 px-6 pb-6`}
`;

const Body = styled.div`
  ${tw`pt-6 px-6`}
`;

Modal.Footer = Footer;
Modal.Body = Body;
Modal.Header = Header;
Modal.Content = ModalContent;
