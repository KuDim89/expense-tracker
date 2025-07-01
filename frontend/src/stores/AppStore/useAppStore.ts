import type { StateCreator } from 'zustand/vanilla';

import { devtools } from 'zustand/middleware';
import { create } from 'zustand/react';

import type { IAppState } from './types.ts';

import { initialState } from './costants.ts';

const appStore: StateCreator<IAppState, [['zustand/devtools', never]]> = (
  set,
) => ({
  ...initialState,

  toggleSideBar: () => {
    set(
      (state) => ({ isSideBarOpen: !state.isSideBarOpen }),
      false,
      'toggleSideBar',
    );
  },

  toggleSideBarFull: () => {
    set(
      (state) => ({ isSideBarFull: !state.isSideBarFull }),
      false,
      'toggleSideBarFull',
    );
  },
});

const useAppStore = create<IAppState>()(
  devtools(appStore, { store: 'appStore' }),
);

export default useAppStore;
