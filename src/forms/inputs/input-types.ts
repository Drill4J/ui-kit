export interface InputProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  checked?: boolean;
  value?: any;
  onChange?: () => void;
  error?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}
