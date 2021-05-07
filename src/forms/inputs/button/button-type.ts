export interface ButtonType {
  kind?: 'primary' | 'secondary';
  size?: 'large' | 'small';
  disabled?: boolean;
  'data-test'?: string;
}
