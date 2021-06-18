import { useState } from 'react';
import styled from 'styled-components';

import { Icons } from '../../../components';
import { useClickOutside } from '../../../hooks';
import { DropdownProps } from './dropdown-types';
import { COLORS, FONTS } from '../../../theme';

export const Dropdown = ({
  items, value, onChange,
}: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const node = useClickOutside(() => setIsExpanded(false));
  const selectedValue = items.find((item) => value === item.value);

  return (
    <Wrapper ref={node}>
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        <Value>{selectedValue && selectedValue.label}</Value>
        <Icon>
          <Icons.Expander width={8} height={8} rotate={isExpanded ? 180 : 0} />
        </Icon>
      </Button>
      {isExpanded && (
        <ItemsListWrapper>
          <ItemsList>
            {items.map((item) => (
              <Item
                onClick={() => {
                  onChange(item);
                  setIsExpanded(false);
                }}
                key={item.value}
              >
                <SelectedIcon>{value === item.value && <Icons.Check />}</SelectedIcon>
                {item.label}
              </Item>
            ))}
          </ItemsList>
        </ItemsListWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Value = styled.div`
  font-size: 14px;
  font-family: ${FONTS.SEMI_BOLD};
  line-height: 24px;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
`;

const Icon = styled.div`
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  margin-left: 8px;
  transform: rotate(90deg);
`;

const ItemsListWrapper = styled.div`
  position: absolute;
  top: 30px;
  z-index: 150;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 306px;
  max-height: 345px;
  overflow-y: auto;
  background-color: ${COLORS.MONOCHROME.WHITE};
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.15);
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 32px;
  padding-left: 8px;
  color: ${COLORS.MONOCHROME.BLACK};
  cursor: pointer;

  &:hover {
    background-color: rgba(104, 116, 129, 0.05);
  }
`;

const SelectedIcon = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
`;
