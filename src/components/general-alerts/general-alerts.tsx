import styled, { css } from 'styled-components';

import { Icons } from '../icon';
import { COLORS } from '../../theme';

type Message = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO'

interface Props {
  className?: string;
  children?: React.ReactNode;
  type: Message;
}

export const GeneralAlerts = ({
  className, children = 'Internal service error', type,
}: Props) => (
  <Wrapper className={className}>
    <Content type={type}>
      {getMessageIcon(type)}
      {children}
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 20px;
`;

const Content = styled.div<{type?: Message}>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 24px;
  word-break: break-word;
  
  ${({ type }) => [
    type === 'SUCCESS' && css`background-color: ${COLORS.GREEN.LIGHT_TINT}`,
    type === 'ERROR' && css`background-color: ${COLORS.RED.ULTRALIGHT_TINT}`,
    type === 'INFO' && css`
      color: ${COLORS.MONOCHROME.DEFAULT};
      background-color: ${COLORS.MONOCHROME.LIGHT_TINT};
    `,
    type === 'WARNING' && css`background-color: ${COLORS.ORANGE.LIGHT_TINT}`,
  ]}
`;

const MessageIcon = styled.div<{type?: Message}>`
  display: flex;
  align-self: start;
  align-items: center;
  height: 20px;
  margin-right: 8px;
  
  ${({ type }) => [
    type === 'SUCCESS' && css`color: ${COLORS.GREEN.DEFAULT}`,
    type === 'ERROR' && css`color: ${COLORS.RED.DEFAULT}`,
    type === 'INFO' && css`color: ${COLORS.MONOCHROME.DEFAULT};`,
    type === 'WARNING' && css`color: ${COLORS.ORANGE.DEFAULT}`,
  ]}
`;

function getMessageIcon(type: Message) {
  switch (type) {
    case 'ERROR': {
      return (
        <MessageIcon type={type}>
          <Icons.Cancel height={16} width={16} />
        </MessageIcon>
      );
    }
    case 'SUCCESS': {
      return (
        <MessageIcon type={type}>
          <Icons.Checkbox height={16} width={16} />
        </MessageIcon>
      );
    }
    case 'WARNING': {
      return (
        <MessageIcon type={type}>
          <Icons.Warning height={16} width={16} />
        </MessageIcon>
      );
    }
    default: {
      return (
        <MessageIcon type={type}>
          <Icons.Info height={16} width={16} />
        </MessageIcon>
      );
    }
  }
}
