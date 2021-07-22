import { Inputs } from '../inputs';
import { fieldWrapper } from './field-wrapper';

export const Fields = {
  Input: fieldWrapper(Inputs.Text),
  Search: fieldWrapper(Inputs.Search),
  Textarea: fieldWrapper(Inputs.Textarea),
  NumberInput: fieldWrapper(Inputs.Number),
} as any;
