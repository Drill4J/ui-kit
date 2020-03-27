import { useEffect, useReducer } from 'react';

interface FilterItem {
  name: string;
  checked: boolean;
}

type FilterState = { filterItems: FilterItem[]; isExpanded: boolean };
type Action = ReturnType<typeof toggleFilter | typeof toggleAll | typeof setIsExpanded>;

const TOGGLE_FILTER = 'TOGGLE_FILTER';
const TOGGLE_ALL = 'TOGGLE_ALL';
const SET_IS_EXPANDED = 'SET_IS_EXPANDED';

export const toggleFilter = (name: string) => ({ type: TOGGLE_FILTER, payload: name } as const);
export const toggleAll = (checked: boolean) => ({ type: TOGGLE_ALL, payload: checked } as const);
export const setIsExpanded = (checked: boolean) => ({ type: SET_IS_EXPANDED, payload: checked } as const);

export const reducer = ({ filterItems, isExpanded }: FilterState, action: Action): FilterState => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        filterItems: filterItems.map(checkbox => {
          if (checkbox.name === action.payload) {
            return ({ ...checkbox, checked: !checkbox.checked });
          }
          return checkbox;
        }),
        isExpanded,
      };
    case TOGGLE_ALL:
      return { filterItems: filterItems.map((checkbox) => ({ ...checkbox, checked: action.payload })), isExpanded };
    case SET_IS_EXPANDED:
      return { filterItems, isExpanded: action.payload };
    default:
      return { filterItems, isExpanded };
  }
};

export const useFilter = (filters: string[]) => {
  const [{ filterItems, isExpanded }, dispatch] = useReducer(
    reducer,
    { filterItems: filters.map(filter => ({ name: filter, checked: true })), isExpanded: false },
  );
  const selectedFilterItems = filterItems.filter((selectedFilterItem) => selectedFilterItem.checked);

  useEffect(() => {
    filterItems.every(checkbox => checkbox.checked === false) && dispatch(toggleAll(true));
  }, [isExpanded]);

  return {
    isExpanded, filterItems, selectedFilterItems, dispatch,
  };
};
