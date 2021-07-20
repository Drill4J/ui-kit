import { styled } from 'twin.macro';
// @ts-ignore
import icon from "./check.svg";

export const Checkbox = ({ field, ...props }: any) => (
    <Input type="checkbox" className={`
      appearance-none
      min-w-16px
      min-h-16px
      bg-monochrome-white 
      bg-no-repeat
      border rounded 
      border-current-color
      cursor-pointer
      hover:border-current-color
      checked:bg-current-color
      checked:hover:opacity-[0.8]
      checked:border-transparent
      disabled:opacity-50
      `}
      {...field}
      {...props} 
    />
);
const Input = styled.input`
  background-image: url(${icon});
  &:checked + svg {
    display: block;
  }
`;
