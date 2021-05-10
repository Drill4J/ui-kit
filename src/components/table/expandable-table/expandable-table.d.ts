import { ReactNode } from 'react';
import { Sort } from '../table-types';
interface Props {
    data: object[];
    idKey: string;
    children: ReactNode;
    expandedColumns?: any[];
    expandedContentKey: string;
    secondLevelExpand?: any[];
    className?: string;
    hasSecondLevelExpand?: boolean;
    sort?: Sort;
    onSort?: (sort: Sort) => void;
    gridTemplateColumns?: string;
    gridExpandedTemplateColumns?: string;
}
export declare const ExpandableTable: {
    ({ children, data, idKey, expandedColumns, className, expandedContentKey, sort, onSort, gridTemplateColumns, gridExpandedTemplateColumns, ...restProps }: Props): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            data: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            idKey: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            expandedColumns: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            expandedContentKey: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            secondLevelExpand: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            className: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            hasSecondLevelExpand: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            sort: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onSort: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            gridTemplateColumns: {
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
