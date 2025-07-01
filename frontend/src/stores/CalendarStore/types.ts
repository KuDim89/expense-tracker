export interface AppState {
  isSideBarFull: boolean;
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  toggleSideBarFull: () => void;
}

export interface IInitialState {
  selectedDate: string;
  selectedMonth: string;
}

interface IActions {
  setSelectedDate: (date: string) => void;
  setSelectedMonth: (date: string) => void;
}

export interface ICalendarState extends IInitialState, IActions {}
