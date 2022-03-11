import tw, { styled } from 'twin.macro';
import { Icons } from '../../../icon/index';

export const Expander = styled(Icons.Expander)`
  ${tw`text-monochrome-medium-tint`}
`;

export const InputWrapper = styled.div<{ disabled?: boolean; isActive: boolean; }>`
  ${tw`py-2 px-4 cursor-pointer`}
  ${tw`box-border border border-monochrome-dark rounded bg-monochrome-black hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-white`}

  &:hover ${Expander} {
    ${tw`text-blue-medium-tint`}
  }
`;

export const ScrollContainer = styled.div`
  ${tw`overflow-auto rounded bg-monochrome-black`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-black`}
  };

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-default rounded-full border-[6px] border-solid border-monochrome-black`}
  };
`;
