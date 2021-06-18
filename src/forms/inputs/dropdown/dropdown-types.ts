export interface DropdownItemProps {
  value: number | string;
  label: React.ReactNode;
}

export interface DropdownProps {
  items: DropdownItemProps[];
  value: number | string;
  onChange: (arg: DropdownItemProps) => void;
}
