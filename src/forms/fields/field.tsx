import { FieldRenderProps } from 'react-final-form';

import { convertToSingleSpaces } from '@drill4j/common-utils';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import { usePreserveCaretPosition } from './use-preserve-caret-position';

const ErrorMessage = styled.div`
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
  color: ${COLORS.RED.DEFAULT};
  
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const field = <T, >(Input: React.ElementType) => (props: FieldRenderProps<T>) => {
  const {
    input, meta, replacer, ...rest
  } = props;
  const isError = (meta.error || (meta.submitError && !meta.dirtySinceLastSubmit)) && meta.touched;
  const handleOnChange = usePreserveCaretPosition(replacer || convertToSingleSpaces);

  return (
    <>
      <Input
        {...input}
        {...rest}
        error={isError}
        onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
          input.onBlur();
          input.onChange({ target: { value: event.target.value.trimEnd() } });
        }}
        onChange={input.type === 'checkbox' ? input.onChange : (event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(input, event)}
      />
      {isError && <ErrorMessage>{meta.error || meta.submitError}</ErrorMessage>}
    </>
  );
};
