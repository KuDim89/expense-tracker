export interface DaysProps {
  activeDate: string;
  activeMonth: string;
  isDisabledFuture?: boolean;
  isTriggerAnimation: boolean;
  openCalendar: (value: boolean) => void;
  setActiveDate: (value: string) => void;
}
