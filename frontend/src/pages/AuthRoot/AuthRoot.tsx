import { useLocation } from 'react-router-dom';

import { RouteNames } from '../routeNames.ts';
import { Login } from './Login';
import { Registration } from './Registration';

export const AuthRoot = () => {
  const location = useLocation();

  return (
    <div className="m-auto mt-40 w-1/4 rounded-2xl p-8 shadow-md shadow-gray-500">
      {location.pathname === RouteNames.LOGIN ? (
        <Login />
      ) : location.pathname === RouteNames.REGISTRATION ? (
        <Registration />
      ) : null}
    </div>
  );
};
