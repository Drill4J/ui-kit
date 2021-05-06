import styled from 'styled-components';

interface GenericIconProps {
  className?: string;
  path: string;
  viewBox: string;
  width?: number;
  height?: number;
  transform?: string;
  rotate?: number;
  fillRule?: 'inherit' | 'nonzero' | 'evenodd';
  onClick?: () => void;
}

export const GenericIcon = styled(({ path, rotate = 0, ...rest }: GenericIconProps) => (
  <svg
    {...rest}
    transform={`rotate(${rotate})`}
    style={{ WebkitTransform: `rotate(${rotate}deg)` }}
  >
    {mapPath(path, (d: string, key: number) => (
      <path d={d} key={key} />
    ))}
  </svg>
))`
  fill: currentColor;
`;

function mapPath(path = '', mapper: (value: string, index: number) => JSX.Element) {
  return path
    .split(/[\r\n]+/)
    .filter(Boolean)
    .map(mapper);
}
