import React from 'react';

export interface IconProps {
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  viewBox?: string;
  rotate?: number;
  'data-test'?: string;
}
