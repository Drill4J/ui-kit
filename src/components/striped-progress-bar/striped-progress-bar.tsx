import { styled, css } from 'twin.macro';

interface Props {
  value?: string;
  type: 'primary' | 'secondary';
}

export const StripedProgressBar = ({ value, type }: Props) => (
  <Wrapper type={type} style={{ width: value }} data-test={`striped-progress-bar:${type}`} />
);

const Wrapper = styled.div<{type?: 'primary' | 'secondary'}>`
  display: block;
  border-radius: 0 4px 4px 0;
  transition: width 2000ms ease-in;
  height: 12px;
  animation: 1s progress-bar-stripes linear infinite;
  background-size: 10px 10px;

  ${({ type }) => [
    type === 'primary' && css`
      background-image: linear-gradient(135deg,
      transparent 10%, #aed4fd 10%, #aed4fd 50%,
      transparent 50%,
      transparent 60%, #aed4fd 60%, #aed4fd);
    `,
    type === 'secondary' && css`
      background-image: linear-gradient(135deg,
      transparent 10%, #4f8ac9 10%, #4f8ac9 50%,
      transparent 50%,
      transparent 60%, #4f8ac9 60%, #4f8ac9);
      transform: rotate(180deg);
      border-radius: 4px 0 0 4px;
    `,
  ]}

  @keyframes progress-bar-stripes {
    from  { background-position: 0 0; }
    to    { background-position: 30px 0; }
  }
`;
