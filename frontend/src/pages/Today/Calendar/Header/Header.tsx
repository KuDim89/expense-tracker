import { isAfter } from 'date-fns';

import useCalendarStore from '../../../../stores/CalendarStore/useCalendarStore.ts';

export const Header = () => {
  const today = new Date();
  const { selectedMonth } = useCalendarStore();
  const isFutureMonth = isAfter(selectedMonth, today);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div
      className={`mb-2 grid grid-cols-7 gap-2 text-center text-lg font-medium ${isFutureMonth ? 'text-gray-300' : 'text-blue-600'}`}
    >
      {daysOfWeek.map((dayName) => (
        <div className="first:text-gray-300 last:text-gray-300" key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
};
