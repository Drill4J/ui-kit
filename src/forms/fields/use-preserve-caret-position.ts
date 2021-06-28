import { useRunAfterUpdate } from './use-run-after-update';

export const usePreserveCaretPosition = (replacer: (str: string) => string) => {
  const runAfterUpdate = useRunAfterUpdate();

  const parse = (value: string, caretPosition: number) => {
    const beforeCaret = value.slice(0, caretPosition);
    const afterCaret = value.slice(caretPosition, value.length);

    const parseBeforeCaret = replacer(beforeCaret);
    const parseAfterCaret = replacer(afterCaret);

    const newValue = parseBeforeCaret + parseAfterCaret;
    const preserveCaret = parseBeforeCaret.length;

    return [newValue, preserveCaret];
  };

  const handleOnChange = ({ onChange }: any, event: any) => {
    const input = event.target;
    const [newValue, preserveCaret] = parse(event.target.value, input.selectionStart);
    onChange({
      target: {
        value: replacer(String(newValue)),
      },
    });
    runAfterUpdate(() => {
      input.selectionStart = preserveCaret;
      input.selectionEnd = preserveCaret;
    });
  };

  return handleOnChange;
};
