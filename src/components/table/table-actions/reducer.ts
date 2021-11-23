/*
 * Copyright 2020 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Search, Sort } from '@drill4j/types-admin';
import { TableActionsState } from './table-actions-types';

const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_EXPANDED_ROWS = 'SET_EXPANDED_ROWS';

export type Action = ReturnType<typeof setSearch | typeof setSort | typeof setExpandedRows>;

export const setSearch = (searchQuery: Search[]) => ({ type: SET_SEARCH, payload: searchQuery } as const);

export const setSort = (sort: Sort) => ({ type: SET_SORT, payload: sort } as const);

export const setExpandedRows = (rowsIds: string[]) => ({ type: SET_EXPANDED_ROWS, payload: rowsIds } as const);

export const actionsReducer = (state: TableActionsState, action: Action): TableActionsState => {
  const [sort] = state.sort;
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_SORT:
      return {
        ...state,
        sort: [{
          field: action.payload.field,
          order: action.payload.field === sort?.field ? action.payload.order : 'ASC',
        }].filter(({ order }) => Boolean(order)),
      };
    case SET_EXPANDED_ROWS:
      return {
        ...state,
        expandedRows: action.payload,
      };
    default:
      return state;
  }
};
