import tw, { styled } from 'twin.macro';
import { Checkbox } from './checkbox';

export const MultiSelectCheckbox = styled(Checkbox)(({ partiallySelected, allSelected }
: { partiallySelected: boolean, allSelected: boolean }) => [
  tw`relative checked:bg-none checked:border-current-color`,
  partiallySelected && tw`
    bg-current-color 
    border-transparent 
    after:(absolute right-[3px] top-1.5 block w-2 h-[1.5px] bg-monochrome-white rounded)
  `,
  allSelected && tw`checked:bg-current-color checked:hover:opacity-[0.8] checked:border-transparent checked:bg-check-mark`,
]);
