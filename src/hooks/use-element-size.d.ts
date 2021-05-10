/// <reference types="react" />
export declare function useElementSize<E extends HTMLElement>(ref: React.RefObject<E>): {
    width: number;
    height: number;
};
export declare namespace useElementSize {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            current: {
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
}
