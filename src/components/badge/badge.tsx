import tw, { styled } from 'twin.macro';

interface Props {
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'orange' | 'gray' | 'red';
}

export const Badge = styled.span<Props>`
  padding: 0 4px;
  border: 1px solid currentColor;
  border-radius: 11px;
  font-size: 8px;
  line-height: 12px;
  ${({ bold }) => bold && tw`font-bold`}
  ${({ color }) => [
    color === 'gray' && tw`text-monochrome-default`,
    color === 'green' && tw`text-green-medium-tint`,
    color === 'orange' && tw`text-orange-default`,
    color === 'red' && tw`text-red-default`,
  ]}
`;
