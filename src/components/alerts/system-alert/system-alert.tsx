import React, {
  ReactChildren, ReactElement, ReactNode,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../../icon/index';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface SystemAlertProps {
  title: string;
  type: AlertType;
  onClose: () => void;
  children?: ReactChildren | ReactNode;
  action?: ReactElement;
}

export const SystemAlert = ({
  title, type, action, children, onClose,
}: SystemAlertProps) => (
  <Content type={type} tw="w-[600px] flex gap-x-2 py-1 px-4">
    <div tw="mt-2">
      {getIcon(type)}
    </div>
    {/* HACK: use min-width use min-width so that the text does not stretch outside the block
        Link: https://css-tricks.com/flexbox-truncated-text/ */}
    <div tw="flex flex-col flex-grow py-1 min-w-8px">
      <span tw="text-16 leading-24 font-bold truncate" data-test="system-alert:title">{title}</span>
      <div tw="text-14 leading-20" data-test="system-alert:description">{children}</div>
    </div>
    {action}
    <CloseButton tw="flex justify-center items-center w-6 h-6 mt-1" onClick={onClose}>
      <Icons.CloseBold />
    </CloseButton>
  </Content>
);

interface ContentProps {
  type: AlertType;
}

const Content = styled.div<ContentProps>`
  ${tw`rounded-lg text-monochrome-white overflow-hidden`};

  ${({ type }) => [
    type === 'INFO' && tw`bg-blue-primary`,
    type === 'SUCCESS' && tw`bg-green-success`,
    type === 'WARNING' && tw`bg-orange-warning`,
    type === 'ERROR' && tw`bg-red-medium-tint`,
  ]}
`;

const Action = styled.div`
  ${tw`self-start mt-1 px-2`}
  ${tw`text-16 leading-24 text-monochrome-white uppercase font-bold rounded-2xl cursor-pointer
  hover:bg-[rgba(256, 256, 256, 0.1)] active:(text-monochrome-dark-tint bg-transparent) disabled:opacity-40`}
`;

const CloseButton = styled.div`
  ${tw`rounded-full hover:bg-[rgba(256, 256, 256, 0.1)] active:(text-monochrome-dark-tint bg-transparent) 
  disabled:opacity-40  cursor-pointer`}
`;

SystemAlert.Action = Action;
