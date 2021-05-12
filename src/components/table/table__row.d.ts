interface Props {
  className?: string;
  item: {
    [key: string]: unknown;
  };
  columns: any[];
  index: number;
  color?: 'blue' | 'gray' | 'yellow';
  expandedColumns?: any[];
  expandedContentKey?: string;
  expandedRows?: string[];
  nested?: boolean;
  nestedLast?: boolean;
  gridTemplateColumns: string;
  gridExpandedTemplateColumns?: string;
}
export declare const TableRow: {
  ({
    className, item, columns, index, expandedContentKey, color, expandedColumns, expandedRows, gridTemplateColumns, gridExpandedTemplateColumns, nested, nestedLast,
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
      item: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      columns: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      index: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      color: {
        defaultValue: null;
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
      expandedContentKey: {
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
      nested: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      nestedLast: {
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
