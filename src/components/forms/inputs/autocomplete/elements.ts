import { FixedSizeList } from 'react-window';
import tw, { styled } from 'twin.macro';
import { Icons } from '../../../icon/index';

export const Expander = styled(Icons.Expander)`
  ${tw`text-monochrome-black`}
`;

export const InputWrapper = styled.div<{ disabled?: boolean; isActive: boolean; }>`
  ${tw`py-2 px-4 cursor-pointer`}
  ${tw`box-border border border-monochrome-dark-tint rounded bg-monochrome-white hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-black`}
`;

export const FixedSizeListWithCustomScroll = styled(FixedSizeList)`
  ${tw`w-full max-h-[196px] overflow-auto`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-white`}
  }
;

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-dark-tint rounded-full border-[6px] border-solid border-monochrome-white`}
  }
;
`;
