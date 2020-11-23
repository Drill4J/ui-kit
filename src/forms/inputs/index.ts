import { Input } from './input';
import { NumberInput } from './number-input';
import { SearchInput } from './search-input';
import { Dropdown } from './dropdown';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';
import { Toggler } from './toggler';

export { DropdownInput, DropdownItem } from './dropdown-input';
export {
  Button, LinkButton, CancelButton, NegativeActionButton,
} from './button';
export { Checkbox } from './checkbox';
export const Inputs = {
  Text: Input,
  Number: NumberInput,
  Search: SearchInput,
  Dropdown,
  Textarea,
  Checkbox,
  Toggler,
};
