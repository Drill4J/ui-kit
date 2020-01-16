export interface TextareaProps {
  className?: string;
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
}
