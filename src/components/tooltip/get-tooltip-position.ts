export interface Anchors {
  childrenTopPosition: number;
  childrenLeftPosition: number;
  childrenWidth: number;
  childrenHeight: number;
  messageHeight: number;
  messageWidth: number;
  offset: number;
}
export type Position = 'top-center' | 'top-right' | 'top-left' | 'left' | 'right' | 'bottom-center';

export const getTooltipPosition = (tooltipPositionType: Position, anchors: Anchors) => {
  const isInvalidAnchors = Object.values(anchors).some(anchor => Number.isNaN(anchor) || anchor === Infinity || typeof anchor !== 'number');
  const {
    childrenTopPosition, childrenLeftPosition, childrenWidth, childrenHeight, messageHeight, messageWidth, offset,
  } = anchors;

  const topPosition = `${childrenTopPosition - messageHeight - offset}px`;
  switch (isInvalidAnchors ? 'default' : tooltipPositionType) {
    case 'top-center':
      return {
        top: topPosition,
        left: `${childrenLeftPosition - (messageWidth - childrenWidth) / 2}px`,
      };
    case 'top-right':
      return {
        top: topPosition,
        left: `${childrenLeftPosition + childrenWidth / 2}px`,
      };
    case 'top-left':
      return {
        top: topPosition,
        left: `${childrenLeftPosition - messageWidth + childrenWidth / 2}px`,
      };
    case 'right':
      return {
        top: `${childrenTopPosition + (childrenHeight - messageHeight) / 2}px`,
        left: `${childrenLeftPosition + childrenWidth + offset}px`,
      };
    case 'left':
      return {
        top: `${childrenTopPosition + (childrenHeight - messageHeight) / 2}px`,
        left: `${childrenLeftPosition - messageWidth - offset}px`,
      };
    case 'bottom-center':
      return {
        top: `${childrenTopPosition + childrenHeight + offset}px`,
        left: `${childrenLeftPosition - (messageWidth - childrenWidth) / 2}px`,
      };
    default:
      return {
        top: '0px',
        left: '0px',
      };
  }
};
