import styled, { css } from 'styled-components';

import { Portal } from '../portal';
import { Icons } from '../icon';

import { COLORS } from '../../theme';

interface Props {
  className?: string;
  children: React.ReactChild;
  header: React.ReactNode;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  type?: 'info' | 'error';
  closeOnFadeClick?: boolean;
}

export const Popup = ({
  className,
  header,
  children,
  onToggle,
  isOpen,
  type = 'info',
  closeOnFadeClick = false,
}: Props) => (
  <Wrapper className={className}>
    <Portal rootElementId="modal">
      {isOpen && (
        <div className={className}>
          <Content type={type}>
            <Header>
              {header}
              <CloseButton onClick={() => onToggle(!isOpen)} />
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
  background-color: ${COLORS.MONOCHROME.WHITE};
  transform: translate(-50%, -50%);
  
  ${({ type }) => [
    type === 'info' && css`box-shadow: 0 -4px 0 0 ${COLORS.PRIMARY_BLUE.DEFAULT}, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
    type === 'error' && css`box-shadow: 0 -4px 0 0 ${COLORS.RED.DEFAULT}, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
  ]}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  min-height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
  font-size: 20px;
  line-height: 32px;
  color: ${COLORS.MONOCHROME.BLACK};
`;

const CloseButton = styled(Icons.Close)`
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
