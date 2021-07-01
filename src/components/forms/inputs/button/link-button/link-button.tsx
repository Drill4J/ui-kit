import tw, { styled } from 'twin.macro';

import { Button } from '../button';

export const LinkButton = styled(Button)`
  ${tw`
    inline-flex p-0 border-none bg-transparent text-blue-default font-bold
    hover:text-blue-medium-tint
    active:text-blue-shade
  `};
`;
