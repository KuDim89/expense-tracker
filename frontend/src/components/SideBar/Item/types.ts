import type { ComponentType, SVGProps } from 'react';

export interface ItemType {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}
