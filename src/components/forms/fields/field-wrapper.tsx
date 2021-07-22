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
import { useEffect, useRef } from 'react';
import {
  ErrorMessage, useField, FieldInputProps, FormikProps,
} from 'formik';
import tw, { styled } from 'twin.macro';
import { convertToSingleSpaces } from '@drill4j/common-utils';
import { usePreserveCaretPosition } from '../../../hooks/use-preserve-caret-position';

const ErrorMessageWrapper = styled.div`
  ${tw`text-12 leading-24 whitespace-nowrap text-red-default`};

  &::first-letter {
    text-transform: uppercase;
  }
`;

interface Props {
  field: FieldInputProps<any>;
  form?: FormikProps<any>;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  normalize?: (value: string) => string;
}

export const fieldWrapper = (Input: React.ElementType) => ({
  field: { name }, form, placeholder, disabled, normalize = (value) => value,
}: Props) => {
  const [field, meta, helper] = useField(name);
  const { isSubmitting, dirty, handleSubmit } = form || {};

  const handleOnChange = usePreserveCaretPosition((value) => normalize(convertToSingleSpaces(value)));
  const node = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const isPressedCtrlEnter = (event.ctrlKey || event.metaKey) && event.keyCode === 13;
      if (isPressedCtrlEnter && !isSubmitting && dirty) {
        handleSubmit && handleSubmit();
      }
    };
    node && node.current && node.current.addEventListener('keydown', listener);
    return () => {
      node && node.current && node.current.removeEventListener('keydown', listener);
    };
  });

  return (
    <>
      <Input
        {...field}
        placeholder={placeholder}
        error={meta.error}
        disabled={disabled}
        ref={node}
        onBlur={(event: React.ChangeEvent<HTMLInputElement>) => helper.setValue(event.target.value.trimEnd())}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(helper.setValue, event)}
      />
      <ErrorMessage component={ErrorMessageWrapper} name={name} />
    </>
  );
};
