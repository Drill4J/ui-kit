export interface CheckboxProps {
  color?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
  value?: string;
}
