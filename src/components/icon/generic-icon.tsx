import React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './generic-icon.module.scss';

interface GenericIconProps {
  className?: string;
  path: string;
  viewBox: string;
  width?: number;
  height?: number;
  transform?: string;
  rotate?: number;
  opacity?: number;
  fillRule?: 'inherit' | 'nonzero' | 'evenodd';
  onClick?: () => void;
}

export const GenericIcon = BEM(styles)(({
  path, rotate = 0, opacity = 100, ...rest
}: GenericIconProps) => (
  <svg
    {...rest}
    transform={`rotate(${rotate})`}
    style={{ WebkitTransform: `rotate(${rotate}deg)`, opacity: `${opacity}%` }}
  >
    {mapPath(path, (d: string, key: number) => (
      <path d={d} key={key} />
    ))}
  </svg>
));

function mapPath(path = '', mapper: (value: string, index: number) => JSX.Element) {
  return path
    .split(/[\r\n]+/)
    .filter(Boolean)
    .map(mapper);
}
