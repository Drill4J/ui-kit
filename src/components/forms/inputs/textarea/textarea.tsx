import tw, { styled } from 'twin.macro';

import { TextareaProps } from './textarea-types';

export const Textarea = styled.textarea<TextareaProps>`
  ${tw`box-border w-full h-full rounded font-regular text-14 leading-20 border border-monochrome-medium-tint outline-none resize-none
    focus:border-monochrome-black
    placeholder:text-monochrome-default
  `}
  padding: 10px 16px;

  ${({ disabled, error }) => [
    disabled && tw`border-monochrome-medium-tint bg-monochrome-light-tint text-monochrome-default`,
    error && tw`border-red-default`,
  ]}
`;
