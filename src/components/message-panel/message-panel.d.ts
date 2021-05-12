import { Message } from './message-type';

interface Props {
  className?: string;
  message: Message;
  onClose(): void;
}
export declare const MessagePanel: {
  ({ className, message: { type, text }, onClose }: Props): JSX.Element;
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
      onClose: {
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
