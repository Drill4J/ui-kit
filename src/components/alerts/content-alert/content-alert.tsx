import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface ContentAlertProps {
  type: AlertType;
}

export const ContentAlert: FC<ContentAlertProps> = ({ type, children, ...rest }) => (
  <Body type={type} tw="flex gap-x-3 px-4 py-2" {...rest}>
    <div tw="mt-1">
      <ColorWrapper type={type}>
        {getIcon(type)}
      </ColorWrapper>
    </div>
    <Message>
      {children}
    </Message>
  </Body>
);

const Body = styled.div<{type: AlertType}>`
  ${tw`rounded-lg overflow-hidden`};

  ${({ type }) => [
    type === 'INFO' && tw`bg-blue-default bg-opacity-10`,
    type === 'SUCCESS' && tw`bg-green-default bg-opacity-10`,
    type === 'WARNING' && tw`bg-orange-default bg-opacity-10`,
    type === 'ERROR' && tw`bg-red-medium-tint bg-opacity-10`,
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
