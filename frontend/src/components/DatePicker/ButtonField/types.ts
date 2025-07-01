export interface ButtonFieldProps {
  date: string;
  helperText?: string;
  isActive: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
  toggleCalendar: () => void;
}
