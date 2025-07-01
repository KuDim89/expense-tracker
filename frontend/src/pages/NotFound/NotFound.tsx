import { NavLink } from 'react-router-dom';

import { RouteNames } from '../routeNames.ts';

export const NotFound = () => {
  return (
    <div className="relative flex h-screen justify-center">
      <p className="absolute text-[300px] font-bold text-blue-50">404</p>
      <div className="z-10 mt-50 flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold">NOT FOUND</h1>
        <p>Oops! This page doesn’t exist.</p>
        <NavLink
          className="text-blue-500 transition duration-150 ease-in-out hover:underline"
          to={RouteNames.TODAY}
        >
          Home page
        </NavLink>
      </div>
    </div>
  );
};
