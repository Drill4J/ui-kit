import tw, { styled } from 'twin.macro';
import React from 'react';

export const DarkTextarea = React.forwardRef((props: any, ref) => (
  <TextareaWrapper {...props}>
    <StyledTextarea {...props} ref={ref} />
  </TextareaWrapper>
));

const TextareaWrapper = styled.span<{
  disabled?: boolean;
  error?: boolean;
  touched?: boolean;
}>`
  ${tw`
    flex flex-grow py-2
    w-[400px] h-full
    box-border outline-none
    font-regular text-14 leading-24 text-monochrome-medium-tint
    bg-monochrome-black border rounded border-monochrome-dark
    placeholder-monochrome-dark
    hover:border-monochrome-gray
    focus-within:border-monochrome-white
    overflow-hidden
    resize-y
  `}

  ${({ disabled, error, touched }) => [
    touched && error && tw`border-red-default`,
    disabled && tw`bg-monochrome-dark100 text-monochrome-medium-tint opacity-40 resize-none hover:border-monochrome-dark`,
  ]}

`;

const StyledTextarea = styled.textarea<{
  disabled?: boolean;
  error?: boolean;
  touched?: boolean;
}>`
  ${tw`
    appearance-none
    w-full min-h-[70px] h-full pl-4
    box-border outline-none
    font-regular text-14 leading-24 text-monochrome-medium-tint
    bg-transparent
    placeholder-monochrome-dark
    resize-none
  `}

  ::-webkit-scrollbar {
    ${tw`w-[6px] rounded`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-monochrome-gray border border-solid rounded-full border-monochrome-black hover:bg-blue-medium-tint`}
  }
`;
