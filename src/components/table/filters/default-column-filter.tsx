import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { Inputs } from '../../forms';

export function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  const [inputValue, setInputValue] = useState(filterValue);

  const search = useCallback(debounce((value) => {
    setFilter(value);
  }, 300), [setFilter]);

  const onChangeHandler = (value: string) => {
    search(value);
    setInputValue(value);
  };

  useEffect(() => { // filterValue can change not only from this  field
    setInputValue(filterValue);
  }, [filterValue]);

  return (
    <Inputs.Search
      value={inputValue}
      onChange={e => {
        onChangeHandler(e.target.value);
      }}
      reset={() => {
        setFilter('');
        setInputValue('');
      }}
      placeholder={`Search by ${Header.toLowerCase()}`}
      data-test={`${Header.toLowerCase()}:search-input`}
    />
  );
}
