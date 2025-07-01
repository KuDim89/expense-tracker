import type { StateCreator } from 'zustand/vanilla';

import { devtools } from 'zustand/middleware';
import { create } from 'zustand/react';

import type { ICalendarState } from './types.ts';

import { initialState } from './constants.ts';

const calendarStore: StateCreator<
  ICalendarState,
  [['zustand/devtools', never]]
> = (set) => ({
  ...initialState,

  setSelectedDate: (date) => {
    set(() => ({ selectedDate: date }), false, 'setSelectedDate');
  },

  setSelectedMonth: (date) => {
    set(() => ({ selectedMonth: date }), false, 'setSelectedMonth');
  },
});

const useCalendarStore = create<ICalendarState>()(
  devtools(calendarStore, { store: 'calendarStore' }),
);

export default useCalendarStore;
