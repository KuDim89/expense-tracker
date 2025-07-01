export interface IInitialStates {
  isSideBarFull: boolean;
  isSideBarOpen: boolean;
}

interface IActions {
  toggleSideBar: () => void;
  toggleSideBarFull: () => void;
}

export interface IAppState extends IInitialStates, IActions {}
