export interface DatePickerProps {
  additionalClasses?: string;
  helperText?: string;
  isDisabled?: boolean;
  isDisabledFuture?: boolean;
  isError?: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
  setActiveDate: (value: string) => void;
  value: string;
}
