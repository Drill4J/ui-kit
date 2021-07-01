import tw, { styled, css } from "twin.macro";

interface Props {
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

export const AdditionalProgressBar = ({
  value,
  type,
  testContext,
}: Props) => (
  <div tw="h-3 rounded bg-monochrome-light-tint" data-test={`additional-progress-bar:${testContext || type}`}>
    <Progress style={{ width: value }} type={type} />
  </div>
);

const Progress = styled.div<{ type?: 'primary' | 'secondary' }>`
  ${tw`h-3 rounded bg-data-visualization-coverage`};

  ${({ type }) => [
    typeof type !== 'undefined' && css`
      border-radius: 0 4px 4px 0;

      &:hover {
        transform: scaleY(1.7);
      }
    `,
    type === 'primary' && tw`bg-data-visualization-scope-cover`,
    type === 'secondary' && tw`bg-data-visualization-overlapping`]}
`;
