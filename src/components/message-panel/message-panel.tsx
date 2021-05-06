import styled, { css } from 'styled-components';

import { Panel } from '../../layouts';
import { Icons } from '../icon';
import { Message } from './message-type';
import { COLORS, FONTS } from '../../theme';

interface Props {
  className?: string;
  message: Message;
  onClose(): void;
}

export const MessagePanel = ({ className, message: { type, text }, onClose }: Props) => (
  <Wrapper className={className}>
    <Content type={type}>
      <Panel align="space-between">
        <Panel>
          {getMessageIcon(type)}
          <MessageText>{text}</MessageText>
        </Panel>
        <CloseIcon onClick={onClose} />
      </Panel>
    </Content>
  </Wrapper>
);

const MessageText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const CloseIcon = styled(Icons.Close)`
  margin-right: 25px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 48px;
  width: 100%;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const Content = styled.div<Pick<Message, 'type'>>`
  position: absolute;
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  color: ${COLORS.MONOCHROME.BLACK};
  font-size: 14px;
  font-family: ${FONTS.SEMI_BOLD};
  line-height: 20px;
  
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

const MessageIconWrapper = styled.div<Pick<Message, 'type'>>`
  display: flex;
  align-items: center;
  margin-left: 24px;
  
  ${({ type }) => [
    type === 'SUCCESS' && css`color: ${COLORS.GREEN.DEFAULT}`,
    type === 'ERROR' && css`color: ${COLORS.RED.DEFAULT}`,
    type === 'INFO' && css`color: ${COLORS.MONOCHROME.DEFAULT};`,
    type === 'WARNING' && css`color: ${COLORS.ORANGE.DEFAULT}`,
  ]}
`;

function getMessageIcon(type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO') {
  switch (type) {
    case 'ERROR': {
      return (
        <MessageIconWrapper type={type}>
          <Icons.Cancel height={16} width={16} />
        </MessageIconWrapper>
      );
    }
    case 'SUCCESS': {
      return (
        <MessageIconWrapper type={type}>
          <Icons.Checkbox height={16} width={16} />
        </MessageIconWrapper>
      );
    }
    case 'WARNING': {
      return (
        <MessageIconWrapper type={type}>
          <Icons.Warning height={16} width={16} />
        </MessageIconWrapper>
      );
    }
    default: {
      return (
        <MessageIconWrapper type={type}>
          <Icons.Info height={16} width={16} />
        </MessageIconWrapper>
      );
    }
  }
}
