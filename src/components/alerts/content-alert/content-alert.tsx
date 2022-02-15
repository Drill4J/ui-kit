import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface ContentAlertProps {
  message: string;
  type: AlertType;
}

export const ContentAlert: FC<ContentAlertProps> = ({ message, type }) => (
  <Body type={type} tw="flex gap-x-3 px-4 py-2">
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
    type === 'INFO' && tw`bg-[rgba(33, 150, 243, 0.2)]`,
    type === 'SUCCESS' && tw`bg-[rgba(0, 182, 2, 0.2)]`,
    type === 'WARNING' && tw`bg-[rgba(245, 166, 35, 0.2)]`,
    type === 'ERROR' && tw`bg-[rgba(241, 51, 51, 0.2)]`,
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
