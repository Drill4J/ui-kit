import { Inputs } from '../inputs';
import { field } from './field';

export const Fields = {
  Input: field(Inputs.Text),
  Search: field(Inputs.Search),
  Textarea: field(Inputs.Textarea),
  Checkbox: field(Inputs.Checkbox),
};
