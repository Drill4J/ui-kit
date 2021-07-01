export interface TogglerProps {
  label?: React.ReactNode;
  value?: string | boolean;
  disabled?: boolean;
  onChange?: () => void;
}
