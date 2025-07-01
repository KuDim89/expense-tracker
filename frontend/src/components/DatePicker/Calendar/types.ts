export interface CalendarProps {
  activeDate: string;
  activeMonth: string;
  isDisabledFuture?: boolean;
  isOpen: boolean;
  setActiveDate: (value: string) => void;
  setActiveMonth: (value: string) => void;
  toggleOpen: (value: boolean) => void;
}
