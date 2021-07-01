import tw, { styled } from 'twin.macro';

import { Button } from '../button';

export const CancelButton = styled(Button)`
  ${tw`
    border border-red-default bg-monochrome-white text-red-default font-bold
    hover:border-red-medium-tint hover:text-red-medium-tint
    active:border-red-shade active:text-red-shade
  `};
`;
