import type { IInitialState } from './types.ts';

export const initialState: IInitialState = {
  selectedDate: new Date().toISOString(),
  selectedMonth: new Date().toISOString(),
};
