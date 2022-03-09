import { Input } from './input';
import { NumberInput } from './number-input';
import { SearchInput } from './search-input';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';
import { Toggler } from './toggler';
import { DarkInput } from './dark-input';
import { DarkTextarea } from './dark-textarea';
import { Select } from './select';
import { Radio } from './radio';

export {
  Button, LinkButton, CancelButton, NegativeActionButton, CopyButton,
} from './button';
export { Checkbox } from './checkbox';
export const Inputs = {
  Text: Input,
  Number: NumberInput,
  Search: SearchInput,
  Textarea,
  Checkbox,
  Toggler,
  DarkInput,
  DarkTextarea,
  Select,
  Radio,
};

export { Dropdown } from './dropdown';
export { Autocomplete, MultipleSelectAutocomplete } from './autocomplete';
