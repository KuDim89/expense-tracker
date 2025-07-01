import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { AuthRoot } from './pages/AuthRoot/AuthRoot.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';
import { RouteNames } from './pages/routeNames.ts';
import { Today } from './pages/Today/Today.tsx';
import { PrivateRoute } from './utils/router/privateRoute.tsx';

function App() {
  return (
    <Routes>
      <Route element={<AuthRoot />} path={RouteNames.LOGIN} />
      <Route element={<AuthRoot />} path={RouteNames.REGISTRATION} />

      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route element={<Today />} path={RouteNames.TODAY} />
        </Route>
      </Route>

      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
