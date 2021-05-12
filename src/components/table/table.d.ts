import { ReactNode } from 'react';
import { Sort } from './table-types';

interface Props {
  className?: string;
  data?: Array<{
    [key: string]: unknown;
  }>;
  children: any;
  idKey?: string;
  footer?: ReactNode;
  expandedRows?: string[];
  expandedColumns?: any[];
  expandedContentKey?: string;
  withoutHeader?: boolean;
  selectedRows?: string[];
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns?: string;
  gridExpandedTemplateColumns?: string;
}
export declare const Table: {
  ({
    className, data, children, idKey, footer, expandedRows, expandedColumns, expandedContentKey, withoutHeader, selectedRows, sort, onSort, gridTemplateColumns, gridExpandedTemplateColumns,
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
      footer: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      expandedRows: {
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
      withoutHeader: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      selectedRows: {
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
      gridExpandedTemplateColumns: {
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
export {};
