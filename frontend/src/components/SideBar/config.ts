import {
  Battery50Icon,
  CalendarDaysIcon,
  ChartBarIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

import type { SideBarItemType } from './types.ts';

import { RouteNames } from '../../pages/routeNames.ts';

export const sideBarItems: SideBarItemType[] = [
  {
    icon: CalendarDaysIcon,
    id: 1,
    label: 'Today',
    path: RouteNames.TODAY,
  },
  {
    icon: ScaleIcon,
    id: 2,
    label: 'Balance',
    path: RouteNames.BALANCE,
  },
  {
    icon: Battery50Icon,
    id: 3,
    label: 'Budget',
    path: RouteNames.BUDGET,
  },
  {
    icon: ChartBarIcon,
    id: 4,
    label: 'Reports',
    path: RouteNames.REPORTS,
  },
];
