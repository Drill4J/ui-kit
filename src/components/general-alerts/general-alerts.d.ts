/// <reference types="react" />
declare type Message = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
interface Props {
  className?: string;
  children?: React.ReactNode;
  type: Message;
}
export declare const GeneralAlerts: {
  ({ className, children, type }: Props): JSX.Element;
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
      type: {
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
