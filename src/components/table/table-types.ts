import * as React from 'react';

export type Cell = React.ComponentType<any>;

export interface Sort {
  fieldName: string;
  order: 'ASC' | 'DESC';
}

export interface ColumnProps {
  name: string;
  Cell?: Cell;
  HeaderCell?: (props: { column: ColumnProps }) => JSX.Element;
  label?: string;
  width?: string;
  colSpan?: number;
}

export interface ExpandSchema {
  key: string;
  columns: React.ReactNode | React.ReactNode[];
  children: ExpandSchema;
}
