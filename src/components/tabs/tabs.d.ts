import { ReactElement } from 'react';
interface Props {
    className?: string;
    children: ReactElement | ReactElement[];
    activeTab: number | string;
    onSelect: (tabName: string) => void;
}
export declare const TabsPanel: {
    (props: Props): JSX.Element;
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
            activeTab: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onSelect: {
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
export declare const Tab: import("styled-components").StyledComponent<"button", any, {
    active?: boolean | undefined;
    disabled?: boolean | undefined;
}, never>;
export {};
