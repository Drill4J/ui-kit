import { Row } from 'react-table';

export const alphanumeric = (rowA: Row, rowB: Row, columnId: string, desc: boolean) => {
  let [a, b] = getRowValuesByColumnID(rowA, rowB, columnId);
  a = a?.toString();
  b = b?.toString();

  if (a?.toLowerCase() === b?.toLowerCase()) { // no sort if values is equal
    return desc ? -1 : 1;
  }

  return a?.localeCompare(b, ['en-US', 'ru-RU'], {
    numeric: true,
    sensitivity: 'base',
  });
};

function getRowValuesByColumnID(row1: Row, row2: Row, columnId: string) {
  return [row1.values[columnId], row2.values[columnId]];
}
