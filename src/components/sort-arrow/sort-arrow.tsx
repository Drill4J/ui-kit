import tw, { styled } from 'twin.macro';

import { Icons } from '../icon';

interface Props {
  order: 'ASC' | 'DESC' | null;
  active?: boolean;
}

export const SortArrow = ({ order, active }: Props) => (
  <Wrapper active={active}>
    <Icons.SortingArrow rotate={order === 'DESC' ? 0 : 180} />
  </Wrapper>
);

const Wrapper = styled.div<{active?: boolean}>`
  ${tw`grid place-items-center h-4 w-4 text-blue-medium-tint cursor-pointer`}
  
  ${({ active }) => active && tw`text-blue-shade`}
`;
