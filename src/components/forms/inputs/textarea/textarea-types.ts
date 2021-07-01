export interface TextareaProps {
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: boolean;
}
