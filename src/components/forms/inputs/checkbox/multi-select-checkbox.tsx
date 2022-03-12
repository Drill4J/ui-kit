import tw, { styled } from 'twin.macro';

const Checkbox = ({ field, ...props }: any) => (
  <input
    type="checkbox"
    {...field}
    {...props}
  />
);

export const MultiSelectCheckbox = styled(Checkbox)(({ partiallySelected, allSelected }
: { partiallySelected: boolean, allSelected: boolean }) => [
  tw` 
    relative
    appearance-none
    min-w-[16px]
    max-w-[16px]
    min-h-[16px]
    max-h-[16px]
    bg-no-repeat
    border rounded
    border-current-color
    cursor-pointer
    hover:border-current-color
    disabled:opacity-50
    hover:opacity-[0.8]
    bg-transparent
    `,
  partiallySelected && tw`
    bg-current-color 
    border-transparent 
    after:(absolute right-[3px] top-1.5 block w-2 h-[1.5px] bg-monochrome-white rounded)
  `,
  allSelected && tw`bg-current-color hover:opacity-[0.8] border-transparent bg-check-mark`,
]);
