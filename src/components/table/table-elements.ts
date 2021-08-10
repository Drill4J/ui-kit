import tw, { styled } from 'twin.macro';

const TableHead = styled.thead`
  ${tw`bg-monochrome-white text-14 leading-20 font-bold`};
  ${tw`sticky top-0 z-30`};
  
  box-shadow: inset 0 1px 0 #1b1b1b,
  inset 0 -1px 0 #1b1b1b;
`;

const SortArrow = styled.div`
  ${tw`invisible absolute -left-4 grid place-items-center h-4 w-4 text-blue-medium-tint cursor-pointer`};

  ${({ active }: { active: boolean }) => active && tw`visible text-blue-shade`}
`;

const Label = styled.span`
  ${tw`relative inline-flex items-center`};
  
  &:hover ${SortArrow} {
    ${tw`visible`};
  }
`;

const TH = styled.th`
  ${tw`first:px-4 last:px-4`};  
`;

const TR = styled.tr`
  ${tw`h-10 border-b border-monochrome-medium-tint bg-monochrome-white`}
  ${({ isExpanded }: { isExpanded: boolean }) => isExpanded && tw`bg-monochrome-light-tint`}
`;

export const TableElements = {
  TableHead,
  SortArrow,
  Label,
  TH,
  TR,
};
