export interface CheckboxProps {
  color?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  value?: string;
}
