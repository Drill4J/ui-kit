import styled, { css } from 'styled-components';

import { get } from './get';
import { DefaultCell } from './default-cell';
// eslint-disable-next-line import/no-cycle
import { ExpandedRowContent } from './expanded-row-content';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
  item: { [key: string]: unknown };
  columns: any[];
  index: number;
  color?: 'blue' | 'gray' | 'yellow';
  expandedColumns?: any[];
  expandedContentKey?: string;
  expandedRows?: string[];
  nested?: boolean;
  nestedLast?: boolean;
  gridTemplateColumns: string;
  gridExpandedTemplateColumns?: string;
}

export const TableRow = ({
  className,
  item,
  columns,
  index,
  expandedContentKey = '',
  color,
  expandedColumns = [],
  expandedRows,
  gridTemplateColumns,
  gridExpandedTemplateColumns = '',
  nested,
  nestedLast,
}: Props) => (
  <>
    <Wrapper
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns,
        backgroundColor: color ? '#F8F9FB' : undefined,
      }}
    >
      {columns.map((column) => {
        const Cell = column.Cell || DefaultCell;
        return (
          <TableRowCell
            key={column.name}
            type={column.align || 'end'}
            selector={column.name === 'selector'}
            nested={nested}
            nestedLast={nestedLast}
          >
            <Cell value={get(item, column.name)} item={item} rowIndex={index} />
          </TableRowCell>
        );
      })}
    </Wrapper>
    {color && (
      <ExpandedRowContent
        data={item[expandedContentKey]}
        expandedColumns={expandedColumns}
        expandedRows={expandedRows}
        gridExpandedTemplateColumns={gridExpandedTemplateColumns}
      />
    )}
  </>
);

const Wrapper = styled.div`
  align-items: center;
  min-height: 40px;
  border-bottom: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
`;

const TableRowCell = styled.div<{ selector?: boolean; type?: 'start' | 'end'; nested?: boolean; nestedLast?: boolean }>`
  padding: 0 16px;
  
  ${({
    selector, type, nested, nestedLast,
  }) => [
    selector && css`
      &:first-child {
        padding: 0 0;
      }
    `,
    type === 'start' && css`
      width: 100%;
      justify-self: start;
    `,
    type === 'end' && css`
      justify-self: end;
    `,
    nested && css`
      border-left: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
      border-right: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
    `,
    nestedLast && css`
      border-bottom: 1px solid map-get ${COLORS.MONOCHROME.MEDIUM_TINT};
    `,
  ]}
`;
