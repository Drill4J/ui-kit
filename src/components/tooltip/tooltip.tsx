import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { useHover } from '../../hooks';
import { Portal } from '../portal';
import { getTooltipPosition } from './get-tooltip-position';

import styles from './tooltip.module.scss';

export interface Props {
  className?: string;
  message: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
}

const tooltip = BEM(styles);

export const Tooltip = tooltip(({
  className, message, children, position = 'top-center',
}: Props) => {
  const offset = 12;
  const { ref, isVisible } = useHover();

  const [tooltipPositionType, setTooltipPositionType] = React.useState(position);
  const [{ height: messageHeight, width: messageWidth }, setMessageCoords] = React.useState({ height: 0, width: 0 } as DOMRect);
  const messageRef = React.useRef<HTMLDivElement>(null);
  const childrenRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const messageCoords = messageRef?.current?.getBoundingClientRect();
    isVisible && messageCoords && setMessageCoords(messageCoords);

    const observer = new IntersectionObserver(
      ([entry]) => !entry.isIntersecting && setTooltipPositionType(entry.intersectionRect.left ? 'top-left' : 'top-right'),
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
    top: childrenTopPosition = 0, left: childrenLeftPosition = 0, width: childrenWidth = 0, height: childrenHeight = 0,
  } = childrenRef?.current?.getBoundingClientRect() || {};

  const anchors = {
    childrenTopPosition, childrenLeftPosition, childrenWidth, childrenHeight, messageHeight, messageWidth, offset,
  };

  return (
    <div className={className}>
      <div ref={ref}>
        <div ref={childrenRef}>
          {children}
        </div>
      </div>
      {isVisible && message && (
        <Portal rootElementId="tooltip">
          <Message style={getTooltipPosition(tooltipPositionType, anchors)} type={tooltipPositionType}>
            <div ref={messageRef}>
              {message}
            </div>
          </Message>
        </Portal>
      )}
    </div>
  );
});

const Message = tooltip.message('div');
