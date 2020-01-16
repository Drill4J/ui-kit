export interface InputProps {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  rounded?: boolean;
  disabled?: boolean;
  type?: string;
  checked?: boolean;
  value?: any;
  onChange?: () => void;
  error?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}
