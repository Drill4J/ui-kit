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
import queryString from 'querystring';

export const addQueryParamsToPath = (params: Record<string, string>) => {
  const { pathname, search } = window.location;
  const searchParams = Object.entries(queryString.parse(search.slice(1))); // remove ? symbol from string
  return `${pathname}?${queryString.stringify({ ...Object.fromEntries(searchParams), ...params })}`;
};
