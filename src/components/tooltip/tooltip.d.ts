/// <reference types="react" />
export interface Props {
  className?: string;
  message: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
}
export declare const Tooltip: {
  ({
    className, message, children, position,
  }: Props): JSX.Element;
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
      message: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      position: {
        defaultValue: {
          value: string;
        };
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
