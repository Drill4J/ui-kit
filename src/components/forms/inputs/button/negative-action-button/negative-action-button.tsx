import tw, { styled } from 'twin.macro';

import { Button } from '../button';

export const NegativeActionButton = styled(Button)`
  ${tw`border border-red-default bg-red-default text-monochrome-white font-bold
    hover:border-red-medium-tint hover:bg-red-medium-tint
    active:border-red-shade active:bg-red-shade
  `};
`;
