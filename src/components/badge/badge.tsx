import tw, { styled } from 'twin.macro';

interface Props {
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'orange' | 'gray' | 'red';
}

export const Badge = styled.span<Props>`
  ${tw`px-1 pt-[1px] h-[14px] rounded-[11px] border text-[8px] leading-12`}
  ${({ bold }) => bold && tw`font-bold`}
  ${({ color }) => [
    color === 'gray' && tw`text-monochrome-default`,
    color === 'green' && tw`text-green-medium-tint`,
    color === 'orange' && tw`text-orange-default`,
    color === 'red' && tw`text-red-default`,
  ]}
`;
