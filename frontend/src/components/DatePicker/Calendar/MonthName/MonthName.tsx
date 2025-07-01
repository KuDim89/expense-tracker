import type { FC } from 'react';

import { format } from 'date-fns';

export const MonthName: FC<{ activeMonth: string }> = ({ activeMonth }) => {
  return (
    <div
      className={`animation-zoom-in flex transform items-center justify-center gap-2 font-medium transition-all duration-300 ease-in-out`}
      key={activeMonth}
    >
      {format(activeMonth, 'MMMM')}
      <span className="font-light">{format(activeMonth, 'yyyy')}</span>
    </div>
  );
};
