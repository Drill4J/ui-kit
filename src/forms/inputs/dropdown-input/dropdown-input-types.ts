export interface DropdownItemProps {
  value: string;
  label: string;
}

export interface DropdownInputProps {
  className?: string;
  options: DropdownItemProps[];
  value?: DropdownItemProps;
  onChange: (arg: DropdownItemProps) => void;
  error?: boolean;
}
