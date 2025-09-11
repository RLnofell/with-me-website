import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes.jsx';
import { Suspense } from 'react';

function AppRoutes() {
  return useRoutes(routes);
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
