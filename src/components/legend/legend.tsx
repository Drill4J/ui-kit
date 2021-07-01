import 'twin.macro';

interface LegendItem {
  color: string;
  borderColor?: string;
  label: React.ReactNode;
}

interface Props {
  legendItems: LegendItem[];
}

export const Legend = ({ legendItems }: Props) => (
  <div tw="flex gap-x-6 text-12 leading-16 text-monochrome-default">
    {legendItems.map(({ color, label, borderColor }) => (
      <div tw="flex items-center gap-x-2" key={color}>
        <svg width={10} height={10}>
          <circle cx="5" cy="5" r="4.5" fill={color} stroke={borderColor} />
        </svg>
        {label}
      </div>
    ))}
  </div>
);
