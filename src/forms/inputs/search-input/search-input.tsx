import { BEM } from '@redneckz/react-bem-helper';

import { InputProps } from '../input-types';
import { Input } from '../input';
import { Icons } from '../../../components/icon';
import { Panel } from '../../../layouts';

import styles from './search-input.module.scss';

const searchInput = BEM(styles);

export const SearchInput = searchInput(({
  className, reset, ...restProps
}: InputProps) => (
  <div className={className}>
    <Panel>
      <SearchIcon />
      <InputElement {...restProps} />
      {restProps.value && <ClearIcon width={8} height={8} onClick={reset} />}
    </Panel>
  </div>
));

const InputElement = searchInput.inputElement(Input);
const SearchIcon = searchInput.searchIcon(Icons.Search);
const ClearIcon = searchInput.clearIcon(Icons.Close);
