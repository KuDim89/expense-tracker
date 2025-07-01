export const RouteNames = {
  ADD: '/add',
  BALANCE: '/balance',
  BUDGET: '/budget',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  REPORTS: '/reports',
  TODAY: '/',
} as const;

export type RouteNames = (typeof RouteNames)[keyof typeof RouteNames];
