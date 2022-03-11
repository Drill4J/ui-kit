import { FixedSizeList } from 'react-window';
import tw, { styled } from 'twin.macro';
import { Icons } from '../../../icon/index';

export const Expander = styled(Icons.Expander)`
  ${tw`text-monochrome-black cursor-pointer`}
`;

export const AutocompleteBodyWrapper = styled.div`
  ${tw`absolute z-50 top-11 py-2 w-full rounded bg-monochrome-white`}
  box-shadow: 0px 8px 40px rgba(132, 146, 160, 0.2);
`;

export const InputWrapper = styled.div<{ disabled?: boolean; isActive: boolean; }>`
  ${tw`py-2 px-4`}
  ${tw`box-border border border-monochrome-dark-tint rounded bg-monochrome-white hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-black`}
`;

export const FixedSizeListWithCustomScroll = styled(FixedSizeList)`
  ${tw`w-full max-h-[196px] overflow-auto`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-white`}
  };

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-dark-tint rounded-full border-[6px] border-solid border-monochrome-white`}
  };
`;

export const Option = styled.div<{ selected?: boolean }>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-black text-14 leading-20 whitespace-nowrap`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

export const ScrollContainer = styled.div`
  ${tw`w-full max-h-[196px] overflow-auto`};
  box-shadow: 0px 8px 40px rgba(132, 146, 160, 0.2);

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-white`}
  };

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-dark-tint rounded-full border-[6px] border-solid border-monochrome-white`}
  };
`;
