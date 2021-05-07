import styled from 'styled-components';

interface Props {
  className?: string;
  children?: string;
  testContext?: string;
}

export const Status = ({ className, children, testContext = 'data-test' }: Props) => (
  <Wrapper className={className} data-test={`status:${testContext}`}>{children}</Wrapper>
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
