import tw, { styled, css } from 'twin.macro';

import { Portal } from '../portal';
import { Icons } from '../icon';

interface Props {
  children: React.ReactChild;
  header: React.ReactNode;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  type?: 'info' | 'error';
  closeOnFadeClick?: boolean;
}

export const Popup = ({
  header,
  children,
  onToggle,
  isOpen,
  type = 'info',
  closeOnFadeClick = false,
}: Props) => (
  <Wrapper>
    <Portal rootElementId="modal">
      {isOpen && (
        <div>
          <Content type={type}>
            <Header>
              {header}
              <Icons.Close tw="cursor-pointer" onClick={() => onToggle(!isOpen)} data-test="popup:close-button" />
            </Header>
            {children}
          </Content>
          <Fade onClick={() => closeOnFadeClick && onToggle(!isOpen)} />
        </div>
      )}
    </Portal>
  </Wrapper>
);

const Wrapper = styled.div`
  display: contents;
`;

const Content = styled.div<{type?: 'info' | 'error'}>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  ${tw`bg-monochrome-white`};
  transform: translate(-50%, -50%);
  
  ${({ type }) => [
    type === 'info' && css`box-shadow: 0 -4px 0 0 #007fff, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
    type === 'error' && css`box-shadow: 0 -4px 0 0 #ee0000, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
  ]}
`;

const Header = styled.div`
  min-height: 64px;
  ${tw`flex justify-between items-center w-auto px-6 border-b border-monochrome-medium-tint text-20 leading-32 text-monochrome-black`};
`;

const Fade = styled.div`
  opacity: 0.75;
  z-index: 90;
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white`};
`;
