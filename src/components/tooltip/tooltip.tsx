import { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { useHover } from '../../hooks';
import { Portal } from '../portal';
import { getTooltipPosition } from './get-tooltip-position';
import { COLORS } from '../../theme';

export interface Props {
  className?: string;
  message: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
}

export const Tooltip = ({
  className, message, children, position = 'top-center',
}: Props) => {
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
    <Wrapper className={className}>
      <div ref={ref}>
        <div ref={childrenRef}>{children}</div>
      </div>
      {isVisible && message && (
        <Portal rootElementId="tooltip">
          <Message
            style={getTooltipPosition(tooltipPositionType, anchors)}
            type={tooltipPositionType}
          >
            <div ref={messageRef}>{message}</div>
          </Message>
        </Portal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
`;

const Message = styled.div<{type?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right'}>`
  position: absolute;
  white-space: pre;
  text-decoration: none;
  color: ${COLORS.MONOCHROME.WHITE};
  font-size: 12px;
  background: ${COLORS.MONOCHROME.BLACK};
  border-radius: 4px;
  z-index: 100;

  & > div {
    padding: 8px 16px;
  }

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
      border-right-color: ${COLORS.MONOCHROME.BLACK};
      border-left: none;
    `,
    type === 'top-center' && css`
      bottom: -8px;
      right: calc(50% - 8px);
      border-top-color: ${COLORS.MONOCHROME.BLACK};
      border-bottom: none;
    `,
    type === 'top-right' && css`
      bottom: -8px;
      right: calc(100% - 8px);
      border-left-color: ${COLORS.MONOCHROME.BLACK};
      border-right: none;
    `,
    type === 'left' && css`
      bottom: 8px;
      left: 100%;
      border-left-color: ${COLORS.MONOCHROME.BLACK};
      border-right: none;
    `,
    type === 'right' && css`
      bottom: 8px;
      right: 100%;
      border-right-color: ${COLORS.MONOCHROME.BLACK};
      border-left: none;
    `,
  ]}
  }
`;
