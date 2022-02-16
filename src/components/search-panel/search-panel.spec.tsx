import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { SearchPanel } from './search-panel';
import { SessionIndicator } from '../session-indicator';
import { getByDataTest } from '../../../test-utils';

const PLACEHOLDER = 'PLACEHOLDER';
const SEARCH_RESULT = 8;
const SEARCH_QUERY = 'SEARCH_QUERY';
const VALUE = 'VALUE  VALUE';
const EXPECTED_VALUE = 'VALUE VALUE';
const onSearch = jest.fn();

beforeEach(() => {
  jest.useFakeTimers();
  jest.runOnlyPendingTimers();
  onSearch.mockRestore();
});

describe('SearchPanel', () => {
  it('should set value with on space instead of two', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchQuery={SEARCH_QUERY}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
      />,
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER);
    fireEvent.change(input, { target: { value: VALUE } });
    expect(screen.getByDisplayValue(EXPECTED_VALUE)).toBeInTheDocument();
  });

  it('should hide search result if search query is empty', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery=""
      />,
    );
    expect(screen.queryByText('result')).toBe(null);
  });

  it('should show search result if search query is not empty', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText(`${SEARCH_RESULT} results`)).toBeInTheDocument();
  });

  it('should show "1 result" if result is only one', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={1}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText('1 result')).toBeInTheDocument();
  });

  it('should show "8 results" if results is 8', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText(`${SEARCH_RESULT} results`)).toBeInTheDocument();
  });

  it('should reset value after the click to X', () => {
    const { container } = render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER);
    fireEvent.change(input, { target: { value: VALUE } });
    const clearIcon = getByDataTest(container, 'search-input:clear-icon');
    fireEvent.click(clearIcon);

    expect(input.getAttribute('value')).toBe('');
    expect(screen.queryByText('result')).toBe(null);
  });

  it('should call onSearch function after timeout and trim value in the end', () => {
    const VALUE_WITH_SPACES_IN_THE_END = 'value    ';
    const TRIMMED_VALUE = 'value';
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER);
    fireEvent.change(input, { target: { value: VALUE_WITH_SPACES_IN_THE_END } });
    expect(onSearch).toBeCalledTimes(0);
    jest.runOnlyPendingTimers();
    expect(onSearch).toBeCalledTimes(1);
    expect(onSearch.mock.calls[0][0]).toBe(TRIMMED_VALUE);
  });
});
