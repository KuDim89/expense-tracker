import type { ComponentType, SVGProps } from 'react';

import type { RouteNames } from '../../pages/routeNames.ts';

export interface SideBarItemType {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  id: number;
  label: string;
  path: RouteNames;
}
