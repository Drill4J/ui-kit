import { GenericIcon } from './generic-icon';
import { IconProps } from './generic-icon-types';

interface Settings {
  viewBox?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  fillRule?: 'inherit' | 'nonzero' | 'evenodd';
}

export function declareIcon(path: string, settings: Settings = {}) {
  const {
    defaultWidth = 16, defaultHeight = 16, fillRule = 'evenodd', viewBox,
  } = settings;
  return ({ width = defaultWidth, height = defaultHeight, ...rest }: IconProps) => (
    <GenericIcon
      path={path}
      width={width}
      height={height}
      viewBox={viewBox || `0 0 ${defaultWidth} ${defaultHeight}`}
      fillRule={fillRule}
      {...rest}
    />
  );
}
