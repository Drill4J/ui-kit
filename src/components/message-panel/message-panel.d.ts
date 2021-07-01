import { Message } from './message-type';
interface Props {
    message: Message;
    onClose(): void;
}
export declare const MessagePanel: {
    ({ message: { type, text }, onClose }: Props): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
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
