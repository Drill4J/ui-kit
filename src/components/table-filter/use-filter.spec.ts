import {
  reducer, toggleFilter, toggleAll, setIsExpanded,
} from './use-filter';

describe('TableFilter reducer', () => {
  const initialState = {
    filterItems: [{ name: 'test', checked: true }, { name: 'reducer', checked: true }, { name: 'actions', checked: true }],
    isExpanded: false,
  };

  it('should handle setIsExpanded', () => {
    expect(reducer(initialState, setIsExpanded(true))).toEqual({ ...initialState, isExpanded: true });
  });

  it('should handle toggleAll', () => {
    expect(reducer(initialState, toggleAll(!initialState.isExpanded)))
      .toEqual({
        ...initialState,
        filterItems: [
          { name: 'test', checked: !initialState.isExpanded },
          { name: 'reducer', checked: !initialState.isExpanded },
          { name: 'actions', checked: !initialState.isExpanded }],
      });
  });

  it('should handle toggleFilter', () => {
    expect(reducer(initialState, toggleFilter('test')))
      .toEqual({
        ...initialState,
        filterItems: [
          { name: 'test', checked: false },
          { name: 'reducer', checked: true },
          { name: 'actions', checked: true }],
      });
  });
});
