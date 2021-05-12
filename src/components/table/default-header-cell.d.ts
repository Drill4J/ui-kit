import { ColumnProps, Sort } from './table-types';

interface Props {
  className?: string;
  column: ColumnProps;
  sort?: Sort;
  onSort?: (sort: Sort) => void;
}
export declare const DefaultHeaderCell: {
  ({
    className, column: { name, label }, sort, onSort,
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
      column: {
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
    };
  };
};
export {};
