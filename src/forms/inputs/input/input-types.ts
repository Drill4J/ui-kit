export interface InputProps {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  rounded?: boolean;
  disabled?: boolean;
  type?: string;
  checked?: boolean;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  success?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  prefix?: boolean;
  textAlign?: 'right';
  pattern?: string;
  paneField?: boolean;
}
