import React, {
  createContext, FC, useContext, useState,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../icon';
import { Portal } from '../portal';

type State = {isOpen: boolean; setIsOpen: (value: boolean) => void; onClose: () => void};
type Children = React.ReactChild | React.ReactChild[] | React.FC<State> | React.ReactNode;
const defaultContextState: State = { isOpen: false, setIsOpen: () => {}, onClose: () => {} };

const PanelContext = createContext<State>(defaultContextState);

interface PanelProps {
  children: Children;
  onClose?: () => void;
  defaultState?: boolean;
}

const Panel = ({ children, defaultState = true, onClose = () => {} }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  return (
    <PanelContext.Provider value={{ isOpen, setIsOpen, onClose }}>
      {typeof children === 'function' ? children({ setIsOpen, isOpen, onClose }) : children}
    </PanelContext.Provider>
  );
};

interface PanelContentProps {
  children: Children;
  isDisableFadeClick?: boolean;
}

const PanelContent: FC<PanelContentProps> = ({
  children,
  isDisableFadeClick,
  ...rest
}) => {
  const { isOpen, setIsOpen, onClose } = useContext(PanelContext);
  const closeHandler = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <Portal rootElementId="panel" displayContent={isOpen}>
      <div tw="flex w-full h-full justify-center items-center" {...rest}>
        <div tw="
        w-97 absolute flex flex-col top-0 right-0 h-full z-[100] bg-monochrome-white
        shadow-[-4px 0 0 0 #007fff, -20px 0 40px 0 rgba(15, 36, 52, 0.15)]"
        >
          <div
            tw="cursor-pointer absolute -left-12 flex items-center
            justify-center h-12 w-12 rounded-tl-3xl rounded-bl-3xl bg-blue-default text-monochrome-white"
            onClick={closeHandler}
            data-test="panel:close-button"
          >
            <Icons.Close />
          </div>
          {children}
        </div>
        <PanelFade onClick={() => !isDisableFadeClick && closeHandler()} data-test="panel:fade" />
      </div>
    </Portal>
  );
};

const PanelHeader: FC = ({ children, ...rest }) => (
  <div tw="px-6 py-4 border-b border-monochrome-medium-tint" {...rest}>
    {children}
  </div>
);

const PanelSubHeader: FC = ({ children, ...rest }) => (
  <div tw="px-6 py-4 bg-monochrome-light-tint text-monochrome-default" {...rest}>
    {children}
  </div>
);

const PanelFooter: FC = ({ children, ...rest }) => (
  <div tw="px-6 py-4 bg-monochrome-light-tint" {...rest}>
    {children}
  </div>
);

const PanelBody: FC = ({ children, ...rest }) => (
  <div tw="flex-grow" {...rest}>
    {children}
  </div>
);

const PanelFade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white opacity-75 z-[90]`};
`;

Panel.Content = PanelContent;
Panel.Header = PanelHeader;
Panel.SubHeader = PanelSubHeader;
Panel.Footer = PanelFooter;
Panel.Body = PanelBody;

export { Panel };
