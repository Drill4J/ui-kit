import tw, { styled } from 'twin.macro';

interface Props {
  children?: React.ReactNode;
  label?: string;
  optional?: boolean;
  actions?: React.ReactNode;
}

export const FormGroup = ({
  children, label, optional, actions, ...rest
}: Props) => (
  <div {...rest}>
    <Panel>
      <div tw="font-bold text-14 leading-20 text-monochrome-black">{label}</div>
      <div>
        <Panel>
          {optional && <div tw="text-12 leading-16 text-monochrome-default">Optional</div>}
          {actions && <div tw="flex ml-2">{actions}</div>}
        </Panel>
      </div>
    </Panel>
    <div tw="w-full mt-2">{children}</div>
  </div>
);

const Panel = styled.div`
  ${tw`flex w-full items-center justify-between`};
`;
