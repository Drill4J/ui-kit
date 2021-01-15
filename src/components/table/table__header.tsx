import { BEM } from '@redneckz/react-bem-helper';

import { DefaultHeaderCell } from './default-header-cell';
import { ColumnProps, Sort } from './table-types';

import styles from './table-header.module.scss';

interface Props {
  className?: string;
  columns: ColumnProps[];
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns: string;
}

const tableHeader = BEM(styles);

export const TableHeader = tableHeader(({
  columns, className, sort, onSort, gridTemplateColumns,
}: Props) => (
  <div className={className} style={{ display: 'grid', gridTemplateColumns }}>
    {columns.map((column) => {
      const { name, HeaderCell, align = 'end' } = column;
      return (
        <TableHeaderCell key={name} style={{ justifySelf: align }}>
          {HeaderCell
            ? HeaderCell({ column })
            : <DefaultHeaderCell column={column} sort={sort} onSort={onSort} />}
        </TableHeaderCell>
      );
    })}
  </div>
));

const TableHeaderCell = tableHeader.tableHeaderCell('div');
