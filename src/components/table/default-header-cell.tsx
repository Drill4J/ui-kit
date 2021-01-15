import { BEM } from '@redneckz/react-bem-helper';

import { useHover } from '../../hooks';
import { SortArrow } from '../sort-arrow';
import { ColumnProps, Sort, Order } from './table-types';

import styles from './default-header-cell.module.scss';

interface Props {
  className?: string;
  column: ColumnProps;
  sort?: Sort;
  onSort?: (sort: Sort) => void;
}

const defaultHeaderCell = BEM(styles);

export const DefaultHeaderCell = defaultHeaderCell(({
  className, column: { name, label = '' }, sort, onSort,
}: Props) => {
  const { ref, isVisible } = useHover();
  const activeCell = name === sort?.field;
  return (
    <div ref={ref}>
      {onSort && sort ? (
        <div className={className} onClick={() => onSort({ order: setOrder(sort.order), field: name })}>
          {name !== 'selector' && (isVisible || activeCell) &&
          <SortArrow active={activeCell} order={activeCell ? sort.order : null} />}
          {label}
        </div>
      ) : label}
    </div>
  );
});

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
