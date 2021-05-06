import styled from 'styled-components';

import { useHover } from '../../hooks';
import { SortArrow } from '../sort-arrow';
import { ColumnProps, Sort, Order } from './table-types';

interface Props {
  className?: string;
  column: ColumnProps;
  sort?: Sort;
  onSort?: (sort: Sort) => void;
}

export const DefaultHeaderCell = ({
  className, column: { name, label = '' }, sort, onSort,
}: Props) => {
  const { ref, isVisible } = useHover();
  const activeCell = name === sort?.field;
  return (
    <div ref={ref}>
      {onSort && sort ? (
        <Wrapper
          className={className}
          onClick={() => onSort(name === sort.field ? {
            order: setOrder(sort.order),
            field: setOrder(sort.order) ? name : '',
          } : {
            field: name,
            order: 'ASC',
          })}
        >
          {name !== 'selector' && (isVisible || activeCell) &&
          <SortArrow active={activeCell} order={activeCell ? sort.order : null} />}
          {label}
        </Wrapper>
      ) : label}
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

function setOrder(order: Order) {
  switch (order) {
    case 'ASC':
      return 'DESC';
    case 'DESC':
      return null;
    default:
      return 'ASC';
  }
}
