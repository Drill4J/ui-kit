import tw, { styled } from 'twin.macro';

interface Props {
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'orange' | 'gray' | 'red';
}

export const Badge = styled.span<Props>`
  padding: 0 8px;
  border: 1px solid currentColor;
  border-radius: 11px;
  font-size: 12px;
  line-height: 20px;
  ${({ bold }) => bold && tw`font-bold`}
  ${({ color }) => [
    color === 'gray' && tw`text-monochrome-default`,
    color === 'green' && tw`text-green-default`,
    color === 'orange' && tw`text-orange-default`,
    color === 'red' && tw`text-red-default`,
  ]}
`;
