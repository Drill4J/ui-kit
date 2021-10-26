import tw, { styled } from 'twin.macro';
import { Checkbox } from './checkbox';

export const MultiSelectCheckbox = styled(Checkbox)`
    ${tw`relative`};
    ${({ allSelected }: { allSelected: boolean }) => allSelected &&
        tw`checked:bg-none checked:after:(absolute right-[3px] top-1.5 block w-2 h-[1.5px] bg-monochrome-white rounded)`}
`;
