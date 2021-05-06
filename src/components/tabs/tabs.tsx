import { Children, cloneElement, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { COLORS, FONTS } from '../../theme';

interface Props {
  className?: string;
  children: ReactElement | ReactElement[];
  activeTab: number | string;
  onSelect: (tabName: string) => void;
}

export const TabsPanel = (props: Props) => {
  const {
    children, className, activeTab, onSelect,
  } = props;

  return (
    <Wrapper className={className}>
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
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  min-height: 47px;
  border: none;
  padding: 0 0 4px 0;
  background: none;
  white-space: nowrap;
  outline: none;
  color: ${COLORS.MONOCHROME.DEFAULT};
  font-family: ${FONTS.SEMI_BOLD};
  font-size: 14px;
  margin-right: 28px;
  
  ${({ active }) => [
    active && css`
      color: ${COLORS.MONOCHROME.BLACK};

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
        border-radius: 2px;
        background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};
        transform: translateY(50%);
      }
    `,
  ]}
`;
