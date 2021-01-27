import { BEM, textarea as bemTextarea } from '@redneckz/react-bem-helper';

import { TextareaProps } from './textarea-types';
import { INPUT_PROPS } from '../input/input-props';

import styles from './textarea.module.scss';

const textarea = BEM(styles);

const INPUT_PROPS_OBJ = Object.assign({}, ...INPUT_PROPS.map((key) => ({ [key]: undefined })));

export const Textarea = (props: TextareaProps) => <TextareaElement {...props} />;

const TextareaElement = textarea.input(
  bemTextarea({
    ...INPUT_PROPS_OBJ,
    value: '',
  } as {}),
);
