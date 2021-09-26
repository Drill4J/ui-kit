import tw, { styled } from 'twin.macro';

import { ButtonType } from './button-type';

export const Button = styled.button<ButtonType>`
  ${tw`flex items-center rounded-2xl gap-x-2 outline-none cursor-pointer`}
  
  ${({
    primary, secondary, size, disabled,
  }) => [
    primary &&
    tw`border border-blue-default bg-blue-default text-monochrome-white font-bold
      hover:border-blue-medium-tint hover:bg-blue-medium-tint
      active:border-blue-shade active:bg-blue-shade 
    `,
    secondary &&
    tw`border border-blue-default bg-transparent text-blue-default font-bold
      hover:border-blue-medium-tint
      active:border-blue-shade
    `,
    size === 'small' && tw`h-6 leading-16 py-0 px-3 text-12`,
    size === 'large' && tw`h-8 leading-20 py-0 px-4 text-14`,
    disabled && tw`opacity[0.4] pointer-events-none`,
  ]}
`;
