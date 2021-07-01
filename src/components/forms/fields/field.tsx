import { FieldRenderProps } from 'react-final-form';
import { convertToSingleSpaces } from '@drill4j/common-utils';
import tw, { styled } from 'twin.macro';

import { usePreserveCaretPosition } from './use-preserve-caret-position';

const ErrorMessage = styled.div`
  ${tw`text-12 leading-24 whitespace-nowrap text-red-default`};

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
