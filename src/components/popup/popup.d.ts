/// <reference types="react" />
interface Props {
    className?: string;
    children: React.ReactChild;
    header: React.ReactNode;
    onToggle: (isOpen: boolean) => void;
    isOpen: boolean;
    type?: 'info' | 'error';
    closeOnFadeClick?: boolean;
}
export declare const Popup: {
    ({ className, header, children, onToggle, isOpen, type, closeOnFadeClick, }: Props): JSX.Element;
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
            header: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onToggle: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            isOpen: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            type: {
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
            closeOnFadeClick: {
                defaultValue: {
                    value: boolean;
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
export {};
