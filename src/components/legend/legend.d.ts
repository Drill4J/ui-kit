/// <reference types="react" />
interface LegendItem {
  color: string;
  borderColor?: string;
  label: React.ReactNode;
}
interface Props {
  className?: string;
  legendItems: LegendItem[];
}
export declare const Legend: {
  ({ className, legendItems }: Props): JSX.Element;
  displayName: string;
  __docgenInfo: {
    description: string;
    displayName: string;
    props: {
      className: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      legendItems: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
    };
  };
};
export {};
