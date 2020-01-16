export interface DropdownItemProps {
  value: string;
  label: string;
}

export interface DropdownProps {
  className?: string;
  items: DropdownItemProps[];
  value: string;
  onChange: (arg: DropdownItemProps) => void;
}
