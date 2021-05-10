interface Props {
    data: any;
    expandedColumns?: any[];
    idKey?: string;
    expandedRows?: string[];
    gridExpandedTemplateColumns: string;
}
export declare const ExpandedRowContent: {
    ({ data, expandedColumns, idKey, gridExpandedTemplateColumns, }: Props): any;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            data: {
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
            expandedColumns: {
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
            idKey: {
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
            expandedRows: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            gridExpandedTemplateColumns: {
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
