import tw, { styled } from 'twin.macro';

import { InputProps } from '../input-types';
import { Input } from '../input';
import { Icons } from '../../../../components/icon';

export const SearchInput = ({ reset, ...restProps }: InputProps) => (
  <div tw="relative">
    <div tw="flex w-full items-center">
      <SearchIcon />
      <InputElement {...restProps} />
      {restProps.value && <ClearIcon width={8} height={8} onClick={reset} />}
    </div>
  </div>
);

const InputElement = styled(Input)`
  input {
    padding: 0 24px;
    width: 400px;
    max-height: 25px;
    border: 0;
    border-radius: 0;

    &:focus {
      border: 0;
      border-bottom: solid 1px #e3e6e8;
    }
  }
`;

const SearchIcon = styled(Icons.Search)`
  ${tw`absolute text-blue-default`}
`;

const ClearIcon = styled(Icons.Close)`
  ${tw`absolute text-red-default cursor-pointer`}
  left: 390px;
`;
