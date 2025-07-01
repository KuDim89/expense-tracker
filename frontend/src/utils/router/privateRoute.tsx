import { Navigate, Outlet } from 'react-router-dom';

import { RouteNames } from '../../pages/routeNames.ts';

export const PrivateRoute = () => {
  // todo: need to update with authentication logic
  const auth = true;

  return auth ? <Outlet /> : <Navigate to={RouteNames.LOGIN} />;
};
