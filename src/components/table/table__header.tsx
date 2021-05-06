import styled from 'styled-components';

import { DefaultHeaderCell } from './default-header-cell';
import { ColumnProps, Sort } from './table-types';
import { COLORS, FONTS } from '../../theme';

interface Props {
  className?: string;
  columns: ColumnProps[];
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns: string;
}

export const TableHeader = ({
  columns, className, sort, onSort, gridTemplateColumns,
}: Props) => (
  <Wrapper className={className} style={{ display: 'grid', gridTemplateColumns }}>
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
  </Wrapper>
);

const Wrapper = styled.div`
  position: sticky;
  top: -0.25rem;
  z-index: 40;
  align-items: center;
  height: 52px;
  font-size: 14px;
  line-height: 20px;
  font-family: ${FONTS.SEMI_BOLD};
  border-bottom: 1px solid ${COLORS.MONOCHROME.BLACK};
  border-top: 1px solid ${COLORS.MONOCHROME.BLACK};
  background-color: ${COLORS.MONOCHROME.WHITE};
  color: ${COLORS.MONOCHROME.BLACK};
`;

const TableHeaderCell = styled.div`
  padding: 0 16px;
`;
