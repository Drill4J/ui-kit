import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { TextareaProps } from './textarea-types';

import styles from './textarea.module.scss';

const textarea = BEM(styles);

export const Textarea = textarea(({ className, ...rest }: TextareaProps) => (
  <textarea className={className} {...rest} />
));
