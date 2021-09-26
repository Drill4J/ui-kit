import tw, { styled } from 'twin.macro';

export const DarkTextarea = styled.textarea<{
  disabled?: boolean;
  error?: boolean;
  touched?: boolean;
}>`
  ${tw`
    appearance-none
    w-[400px] h-20 px-4 py-2
    box-border outline-none
    font-regular text-14 leading-24 text-monochrome-medium-tint
    bg-monochrome-black border rounded border-monochrome-dark
    placeholder-monochrome-dark
    focus:border-monochrome-white
    resize-none
  `}

  ${({ disabled, error, touched }) => [touched && error && tw`border-red-default`]}
`;
