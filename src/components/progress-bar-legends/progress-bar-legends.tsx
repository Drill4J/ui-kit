import tw, { styled, css } from 'twin.macro';

export const ProgressBarLegends = () => (
  <div>
    <Panel>
      <Legend><Percentage type="start">0</Percentage></Legend>
      <Legend><Percentage>25</Percentage></Legend>
      <Legend><Percentage>50</Percentage></Legend>
      <Legend><Percentage>75</Percentage></Legend>
      <Legend><Percentage type="end">100</Percentage></Legend>
    </Panel>
  </div>
);

const Panel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Legend = styled.div`
  ${tw`relative w-1px h-2 bg-monochrome-dark-tint`};
`;

const Percentage = styled.div<{type?: 'start' | 'end'}>`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translate(-50%);
  ${tw`absolute text-12 text-monochrome-dark-tint`};
  
  ${({ type }) => [
    type === 'start' && css`left: 4px`,
    type === 'end' && css`left: -8px`,
  ]}
`;
