import tw, { styled } from 'twin.macro';

import { Icons } from "../../components/icon";

type Message = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO'

interface Props {
  children: React.ReactNode;
  type: Message;
}

export const GeneralAlerts = ({ children, type }: Props) => (
  <div tw="flex text-14 leading-20" data-test="general-alert">
    <Content type={type} data-test="general-alert:content">
      {getMessageIcon(type)}
      {children}
    </Content>
  </div>
);

const Content = styled.div<{type?: Message}>`
  ${tw`flex w-full items-center py-3 px-6 break-words`};
  
  ${({ type }) => [
    type === 'SUCCESS' && tw`bg-green-light-tint`,
    type === 'ERROR' && tw`bg-red-ultralight-tint`,
    type === 'INFO' && tw`text-monochrome-default bg-monochrome-light-tint`,
    type === 'WARNING' && tw`bg-orange-light-tint`,
  ]}
`;

const MessageIcon = styled.div<{type?: Message}>`
  ${tw`flex self-start items-center h-5 mr-2`};
  
  ${({ type }) => [
    type === 'SUCCESS' && tw`text-green-default`,
    type === 'ERROR' && tw`text-red-default`,
    type === 'INFO' && tw`text-monochrome-default`,
    type === 'WARNING' && tw`text-orange-default`,
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
