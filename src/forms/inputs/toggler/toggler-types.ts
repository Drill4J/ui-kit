export interface TogglerProps {
  className?: string;
  label?: React.ReactNode;
  value?: string | boolean;
  disabled?: boolean;
  size?: 'small';
  onChange?: () => void;
}
