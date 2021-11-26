import { Inputs } from '../../forms';

export function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  return (
    <Inputs.Search
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      reset={() => setFilter('')}
      placeholder={`Search by ${Header.toLowerCase()}`}
    />
  );
}
