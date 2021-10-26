import { Children, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useClickOutside } from '../../../../hooks';
import { DarkInput } from '../dark-input';
import { Icons } from '../../../icon';

export const Select = (props: any) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const node = useClickOutside(() => setIsListOpened(false));
  const {
    field, form, options, placeholder, children, value,
  } = props;
  return (
    <div tw="w-[400px] space-y-1 text-monochrome-medium-tint" ref={node}>
      <div tw="relative hover:text-blue-medium-tint" onClick={() => setIsListOpened(!isListOpened)}>
        <DarkInput
          {...field}
          value={value || field.value}
          placeholder={placeholder}
          tw="caret-transparent cursor-pointer"
        />
        <Icons.Expander
          rotate={isListOpened ? -90 : 90}
          tw="absolute top-[14px] right-4 cursor-pointer"
        />
      </div>
      <div>
        {isListOpened && (
          <div tw="bg-monochrome-black border rounded border-monochrome-dark text-monochrome-medium-tint text-12 leading-20">
            {Children.count(children) > 0
              ? children
              : options.map((option: string) => (
                <Option
                  selected={option === field.value}
                  onClick={() => form.setFieldValue(field.name, option)}
                >
                  {option}
                </Option>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Option = styled.div`
  ${tw`px-4 py-3 hover:(cursor-pointer bg-monochrome-white bg-opacity-[0.1])`}
  ${({ selected }: { selected: boolean }) => selected && tw`text-blue-default`}
`;
