import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from 'date-fns';

import useCalendarStore from '../../../../stores/CalendarStore/useCalendarStore.ts';
import { Item } from './Item';

export const DateItems = () => {
  const { selectedMonth } = useCalendarStore();
  const monthStart = startOfMonth(selectedMonth);
  const monthEnd = endOfMonth(selectedMonth);
  const firstDayIndex = getDay(monthStart);
  const days = eachDayOfInterval({ end: monthEnd, start: monthStart });

  return (
    <div className="calendar-days grid h-70 grid-cols-7 gap-2 text-center">
      {Array.from({ length: firstDayIndex }).map((_, i) => {
        return <div key={`empty-${i.toString()}`} />;
      })}

      {days.map((day, i) => (
        <Item
          day={day}
          delay={i * 50}
          key={`${day.toISOString()}-${i.toString()}`}
        />
      ))}
    </div>
  );
};
