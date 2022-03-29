import tw, { styled } from 'twin.macro';

export const DarkInput = styled.input<{ disabled?: boolean; error?: boolean; touched?: boolean }>`
  ${tw`
    appearance-none
    h-10 px-4 w-full
    box-border outline-none
    font-regular text-14 leading-24 text-monochrome-medium-tint
    bg-monochrome-black border rounded border-monochrome-dark
    placeholder-monochrome-dark
    hover:border-monochrome-gray
    focus:border-monochrome-white
  `}

  ${({ disabled, error, touched }) => [
    touched && error && tw`border-red-default`,
    disabled && tw`bg-monochrome-dark100 text-monochrome-medium-tint opacity-40 hover:border-monochrome-dark`,
  ]}
`;
