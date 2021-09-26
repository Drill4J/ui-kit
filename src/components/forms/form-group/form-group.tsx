import 'twin.macro';

interface Props {
  children: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
}

export const FormGroup = ({ children, label, optional }: Props) => (
  <div tw="space-y-2">
    <div tw="flex justify-between text-14 leading-20">
      <div tw="text-monochrome-light-tint font-bold">{label}</div>
      {optional && <div tw="text-monochrome-gray">Optional</div>}
    </div>
    <div>{children}</div>
  </div>
);
