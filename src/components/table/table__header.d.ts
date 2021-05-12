import { ColumnProps, Sort } from './table-types';

interface Props {
  className?: string;
  columns: ColumnProps[];
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns: string;
}
export declare const TableHeader: {
  ({
    columns, className, sort, onSort, gridTemplateColumns,
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
      columns: {
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
    };
  };
};
export {};
