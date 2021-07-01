import tw, { styled } from 'twin.macro';

import { Icons } from '../icon';
import { Message } from './message-type';

interface Props {
  message: Message;
  onClose(): void;
}

export const MessagePanel = ({ message: { type, text }, onClose }: Props) => (
  <div tw="absolute h-12 w-full right-0 z-50">
    <Content type={type}>
      <div tw="flex w-full items-center justify-between">
        <div tw="flex w-full items-center">
          {getMessageIcon(type)}
          <div tw="flex items-center ml-2" data-test="message-panel:text">{text}</div>
        </div>
        <Icons.Close tw="mr-6 cursor-pointer" onClick={onClose} data-test="message-panel:close-icon" />
      </div>
    </Content>
  </div>
);

const Content = styled.div<Pick<Message, 'type'>>`
  ${tw`absolute flex items-center flex-grow h-full w-full text-monochrome-black text-14 font-bold leading-20`};
  
  ${({ type }) => [
    type === 'SUCCESS' && tw`bg-green-light-tint`,
    type === 'ERROR' && tw`bg-red-ultralight-tint`,
    type === 'INFO' && tw`text-monochrome-default bg-monochrome-light-tint`,
    type === 'WARNING' && tw`bg-orange-light-tint`,
  ]}
`;

const MessageIconWrapper = styled.div<Pick<Message, 'type'>>`
  ${tw`flex items-center ml-6`};
  
  ${({ type }) => [
    type === 'SUCCESS' && tw`text-green-default`,
    type === 'ERROR' && tw`text-red-default`,
    type === 'INFO' && tw`text-monochrome-default`,
    type === 'WARNING' && tw`text-orange-default`,
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
