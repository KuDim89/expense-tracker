import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

import { RouteNames } from '../../pages/routeNames.ts';
import useAppStore from '../../stores/AppStore/useAppStore.ts';

import expenseTrackerLogo from '/expense-tracker.svg';

export const Header = () => {
  const { isSideBarOpen, toggleSideBar } = useAppStore();

  return (
    <div className="p-2 shadow-xl">
      <div className="flex items-center gap-8">
        {!isSideBarOpen && (
          <button
            className="cursor-pointer"
            onClick={toggleSideBar}
            type="button"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        )}
        <NavLink
          className="flex items-center gap-2 font-medium transition-all duration-150 ease-in-out hover:scale-110 hover:text-blue-600"
          to={RouteNames.TODAY}
        >
          <img
            alt="Expence tracker logo"
            className="h-7 w-7"
            src={expenseTrackerLogo}
          />
          <p>Expense tracker</p>
        </NavLink>
      </div>
    </div>
  );
};
