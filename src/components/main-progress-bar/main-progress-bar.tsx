import tw, { styled } from 'twin.macro';

interface Props {
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

export const MainProgressBar = ({ value, type, testContext }: Props) => (
  <div tw="h-8 rounded bg-monochrome-light-tint" data-test={`main-progress-bar:${(testContext || type)}`}>
    <Progress style={{ width: value }} type={type} />
  </div>
);

const Progress = styled.div<{type?: 'primary' | 'secondary'}>`
  ${tw`h-8 rounded bg-data-visualization-coverage`}

  ${({ type }) => [
    type === 'secondary' && tw`bg-data-visualization-overlapping`,
    type === 'primary' && tw`bg-data-visualization-scope-cover`,
  ]}
`;
