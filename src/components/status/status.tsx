import { styled } from 'twin.macro';

interface Props {
  children?: string;
  testContext?: string;
}

export const Status = ({ children, testContext = 'data-test' }: Props) => (
  <Wrapper data-test={`status:${testContext}`}>{children}</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: currentColor;
  }
`;
