export interface CheckboxProps {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  value?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'orange';
}
