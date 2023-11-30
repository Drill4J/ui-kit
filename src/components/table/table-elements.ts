import tw, { styled } from 'twin.macro';
import { keyframes } from 'styled-components';

const TableHead = styled.thead`
  ${tw`bg-monochrome-white text-14 leading-20 font-bold`};
  ${tw`sticky top-0 z-30`};
  
  box-shadow: inset 0 1px 0 #1b1b1b,
  inset 0 -1px 0 #1b1b1b;
`;

// TODO: "active" attribute causes "Received `true` for a non-boolean attribute `active`." error
// possible reason https://stackoverflow.com/a/57194646 (I don't see any "acitve" attributes in the output html though)
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

const HeaderText = styled.div`
  ${tw`flex items-center gap-3 w-full`};

  ${({ position }: { position?: 'center' | 'right' | 'left' }) => [
    position === 'center' && tw`justify-center`,
    position === 'right' && tw`justify-end`,
    position === 'left' && tw`justify-start`,
  ]}
`;

const TH = styled.th`
  ${tw`px-4`};  
`;

const TR = styled.tr`
  ${tw`h-10 border-b border-monochrome-medium-tint bg-monochrome-white hover:bg-monochrome-light-tint`}
  ${({ isExpanded }: { isExpanded?: boolean }) => isExpanded && tw`bg-monochrome-light-tint`}
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; border-bottom-width: 0; }
  to { opacity: 1; border-bottom-width: 1px; }
`;

const FadeInTR: any = styled(TR)`
  animation-name: ${FadeInAnimation};
  animation-duration: ${(props: any) => props.duration};  
  animation-timing-function: ${(props: any) => props.timingFunction};      
  animation-delay: ${(props: any) => props.delay};  
  animation-iteration-count: ${(props: any) => props.iterationCount};  
  animation-direction: ${(props: any) => props.direction}; 
  animation-fill-mode: ${(props: any) => props.fillMode};  
  animation-play-state:  ${(props: any) => props.playState};
`;

FadeInTR.defaultProps = {
  duration: '1s',
  timingFunction: 'ease-in',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
} as any;

export const TableElements = {
  TableHead,
  SortArrow,
  Label,
  HeaderText,
  TH,
  TR,
  FadeInTR,
};
