import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface ContentAlertProps {
  message: string;
  type: AlertType;
}

export const ContentAlert: FC<ContentAlertProps> = ({ message, type, ...rest }) => (
  <Body type={type} tw="flex gap-x-3 px-4 py-2" {...rest}>
    <div tw="mt-1">
      <ColorWrapper type={type}>
        {getIcon(type)}
      </ColorWrapper>
    </div>
    <Message>
      {message}
    </Message>
  </Body>
);

const Body = styled.div<{type: AlertType}>`
  ${tw`rounded-lg overflow-hidden`};

  ${({ type }) => [
    type === 'INFO' && tw`bg-[#2196f3] bg-opacity-20`,
    type === 'SUCCESS' && tw`bg-[#00b602] bg-opacity-20`,
    type === 'WARNING' && tw`bg-[#F5A623] bg-opacity-20`,
    type === 'ERROR' && tw`bg-[#F13333] bg-opacity-20`,
  ]}
`;

const Message = styled.div`
  ${tw`text-14 leading-24`}
`;

const ColorWrapper = styled.div<{type: AlertType}>`
  ${({ type }) => [
    type === 'INFO' && tw`text-blue-primary`,
    type === 'SUCCESS' && tw`text-green-success`,
    type === 'WARNING' && tw`text-orange-warning`,
    type === 'ERROR' && tw`text-red-medium-tint`,
  ]}
`;
