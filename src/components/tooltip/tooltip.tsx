import { useLayoutEffect, useRef, useState } from 'react';
import tw, { styled, css } from 'twin.macro';

import { useHover } from '../../hooks';
import { Portal } from '../portal';
import { getTooltipPosition } from './get-tooltip-position';

export interface Props {
  message: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
}

export const Tooltip = ({ message, children, position = 'top-center' }: Props) => {
  const offset = 12;
  const { ref, isVisible } = useHover();

  const [tooltipPositionType, setTooltipPositionType] = useState(position);
  const [{ height: messageHeight, width: messageWidth }, setMessageCoords] = useState({
    height: 0,
    width: 0,
  } as DOMRect);
  const messageRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const messageCoords = messageRef?.current?.getBoundingClientRect();
    isVisible && messageCoords && setMessageCoords(messageCoords);

    const observer = new IntersectionObserver(
      ([entry]) =>
        !entry.isIntersecting &&
          setTooltipPositionType(entry.intersectionRect.left ? 'top-left' : 'top-right'),
      {
        root: null,
        threshold: 1.0,
      },
    );
    messageRef.current && observer.observe(messageRef.current);

    return () => {
      observer.disconnect();
    };
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
      {isVisible && message && (
        <Portal rootElementId="tooltip">
          <Message
            style={getTooltipPosition(tooltipPositionType, anchors)}
            type={tooltipPositionType}
          >
            <div tw="py-2 px-4" ref={messageRef}>{message}</div>
          </Message>
        </Portal>
      )}
    </div>
  );
};

const Message = styled.div<{type?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right'}>`
  z-index: 100;
  ${tw`absolute whitespace-pre no-underline text-monochrome-white text-12 rounded bg-monochrome-black`};

  &::after {
    width: 8px;
    height: 8px;
    position: absolute;
    border: 8px solid transparent;
    content: '';
    ${({ type }) => [
    type === 'top-left' && css`
      bottom: -8px;
      left: calc(100% - 8px);
      border-right-color: #1b191b;
      border-left: none;
    `,
    type === 'top-center' && css`
      bottom: -8px;
      right: calc(50% - 8px);
      border-top-color: #1b191b;
      border-bottom: none;
    `,
    type === 'top-right' && css`
      bottom: -8px;
      right: calc(100% - 8px);
      border-left-color: #1b191b;
      border-right: none;
    `,
    type === 'left' && css`
      bottom: 8px;
      left: 100%;
      border-left-color: #1b191b;
      border-right: none;
    `,
    type === 'right' && css`
      bottom: 8px;
      right: 100%;
      border-right-color: #1b191b;
      border-left: none;
    `,
  ]}
  }
`;
