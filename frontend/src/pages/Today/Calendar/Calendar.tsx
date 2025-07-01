import { ActionButtons } from './ActionButtons';
import { DateItems } from './DateItems';
import { Header } from './Header';

export const Calendar = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid min-w-[300px] gap-2 p-4">
        <Header />
        <DateItems />
        <ActionButtons />
      </div>
    </div>
  );
};
