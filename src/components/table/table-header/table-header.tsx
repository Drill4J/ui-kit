import 'twin.macro';

interface Props {
  name: string;
  displayedResult: string;
  className?: string;
}

export const TableHeader = ({ name, displayedResult, className }: Props) => (
  <div tw="flex justify-between text-monochrome-default text-14 leading-24" className={className}>
    <div tw="uppercase font-weight[600]">{name}</div>
    <div>{displayedResult}</div>
  </div>
);
