import styled from 'styled-components';

import { InputProps } from '../input-types';
import { Input } from '../input';
import { Icons } from '../../../components';
import { COLORS } from '../../../theme';

export const SearchInput = ({ className, reset, ...restProps }: InputProps) => (
  <Wrapper className={className}>
    <Panel>
      <SearchIcon />
      <InputElement {...restProps} />
      {restProps.value && <ClearIcon width={8} height={8} onClick={reset} />}
    </Panel>
  </Wrapper>
);

const Panel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
`;

const InputElement = styled(Input)`
  input {
    padding: 0 24px;
    width: 240px;
    max-height: 25px;
    border: 0;
    border-radius: 0;

    &:focus {
      border: 0;
      border-bottom: solid 1px ${COLORS.MONOCHROME.MEDIUM_TINT};
    }
  }
`;

const SearchIcon = styled(Icons.Search)`
  position: absolute;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
`;
const ClearIcon = styled(Icons.Close)`
  position: absolute;
  left: 230px;
  color: ${COLORS.RED.DEFAULT};
  cursor: pointer;
`;
