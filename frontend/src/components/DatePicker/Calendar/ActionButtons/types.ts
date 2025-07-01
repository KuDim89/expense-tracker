export interface ActionButtonsProps {
  activeDate: string;
  activeMonth: string;
  setActiveDate: (value: string) => void;
  setActiveMonth: (value: string) => void;
  setTriggerAnimation: (value: boolean) => void;
}
