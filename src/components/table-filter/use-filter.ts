import { useState, useEffect, useReducer } from 'react';

interface Checkbox {
  name: string;
  checked: boolean;
}

type Action = ReturnType<typeof toggleFilter | typeof toggleAll>;
type Reducer = (state: Checkbox[], action: Action) => Checkbox[];

const TOGGLE_FILTER = 'TOGGLE_FILTER';
const TOGGLE_ALL = 'TOGGLE_ALL ';

export const toggleFilter = (name: string) => ({ type: TOGGLE_FILTER, payload: name } as const);
export const toggleAll = (checked: boolean) => ({ type: TOGGLE_ALL, payload: checked } as const);

const reducer = (checkboxes: Checkbox[], action: Action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return checkboxes.map(checkbox => {
        if (checkbox.name === action.payload) {
          return ({ ...checkbox, checked: !checkbox.checked });
        }
        return checkbox;
      });
    case TOGGLE_ALL:
      return checkboxes.map((checkbox) => ({ ...checkbox, checked: action.payload }));
    default:
      return checkboxes;
  }
};

export const useFilter = (filters: string[]) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkboxes, dispatch] = useReducer<Reducer>(reducer, filters.map(filter => ({ name: filter, checked: true })));

  useEffect(() => {
    checkboxes.every(checkbox => checkbox.checked === false) && dispatch(toggleAll(true));
  }, [isExpanded]);

  return {
    isExpanded, setIsExpanded, checkboxes, dispatch,
  };
};
