import { Children, cloneElement, ReactElement } from 'react';
import tw, { styled, css } from 'twin.macro';

interface Props {
  children: ReactElement | ReactElement[];
  activeTab: number | string;
  onSelect: (tabName: string) => void;
}

export const TabsPanel = (props: Props) => {
  const {
    children, activeTab, onSelect,
  } = props;

  return (
    <Wrapper>
      {Children.map(children, (child: ReactElement, index: number) =>
        cloneElement(child, {
          onClick: () => onSelect && onSelect(child.props.name || index),
          active: (child.props.name || index) === activeTab,
        }))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export const Tab = styled('button')<{active?: boolean; disabled?: boolean}>`
  min-height: 47px;
  ${tw`flex items-center box-border relative cursor-pointer border-none pb-1 bg-none whitespace-nowrap outline-none text-monochrome-default font-bold text-14 mr-7`};
  
  ${({ active }) => [
    active && css`
      color: #1b191b;

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
        border-radius: 2px;
        background-color: #007fff;
        transform: translateY(50%);
      }
    `,
  ]}
`;
