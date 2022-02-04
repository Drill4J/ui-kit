import {
  useLayoutEffect, useRef, useState,
} from 'react';
import tw, { styled, css } from 'twin.macro';

import { useHover, useIntersectionCallback } from '../../hooks';
import { Portal } from '../portal';
import { getTooltipPosition } from './get-tooltip-position';

export interface Props {
  message: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
  className?: string;
}

export const Tooltip = ({
  message, children, position = 'top-center', className,
}: Props) => {
  const offset = 12;
  const { ref, isVisible } = useHover();

  const [tooltipPositionType, setTooltipPositionType] = useState(position);
  const [{ height: messageHeight, width: messageWidth }, setMessageCoords] = useState({
    height: 0,
    width: 0,
  } as DOMRect);
  const childrenRef = useRef<HTMLDivElement>(null);

  const messageRef = useIntersectionCallback({
    callback: ([entry]) => {
      !entry.isIntersecting &&
      setTooltipPositionType(entry.intersectionRect.left ? 'top-left' : 'top-right');
    },
    dependency: [isVisible],
  });

  useLayoutEffect(() => {
    const messageCoords = messageRef?.current?.getBoundingClientRect();
    isVisible && messageCoords && setMessageCoords(messageCoords);
  }, [isVisible]);

  const {
    top: childrenTopPosition = 0,
    left: childrenLeftPosition = 0,
    width: childrenWidth = 0,
    height: childrenHeight = 0,
  } = childrenRef?.current?.getBoundingClientRect() || {};

  const anchors = {
    childrenTopPosition,
    childrenLeftPosition,
    childrenWidth,
    childrenHeight,
    messageHeight,
    messageWidth,
    offset,
  };

  return (
    <div tw="inline-block">
      <div ref={ref}>
        <div ref={childrenRef}>{children}</div>
      </div>
      <Portal rootElementId="tooltip" displayContent={isVisible && Boolean(message)}>
        <Message
          className={className}
          style={getTooltipPosition(tooltipPositionType, anchors)}
          type={tooltipPositionType}
        >
          <div tw="py-2 px-4" ref={messageRef}>{message}</div>
        </Message>
      </Portal>
    </div>
  );
};

const Message = styled.div<{type?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right'}>`
  z-index: 150;
  ${tw`absolute whitespace-pre no-underline text-monochrome-white text-12 rounded bg-monochrome-black`};

  &::after {
    width: 8px;
    height: 8px;
    position: absolute;
    border: 8px solid transparent;
    content: '';
    ${({ type }) => [
    type === 'top-left' && css`
      ${tw`-bottom-2 left-[calc(100% - 8px)]`}
        border-right-color: #1b191b;
        border-left: none;
      `,
    type === 'top-center' && css`
      ${tw`-bottom-2 right-[calc(50% - 8px)]`}
        border-top-color: #1b191b;
        border-bottom: none;
      `,
    type === 'top-right' && css`
      ${tw`-bottom-2 right-[calc(100% - 8px)]`}
        border-left-color: #1b191b;
        border-right: none;
      `,
    type === 'left' && css`
      ${tw`bottom-2 left-full`}
        border-left-color: #1b191b;
        border-right: none;
      `,
    type === 'right' && css`
      ${tw`bottom-2 right-full`}
        border-right-color: #1b191b;
        border-left: none;
      `,
  ]}
  }
`;
