/// <reference types="react" />
interface Props {
    className?: string;
    children: React.ReactChild;
    onToggle: (isOpen: boolean) => void;
    isOpen: boolean;
}
export declare const Modal: {
    ({ className, children, onToggle, isOpen, }: Props): JSX.Element;
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
        };
    };
};
export {};
