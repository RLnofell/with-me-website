import { lazy } from 'react';
import MainLayout from '../layouts/MainLayout.jsx';

const Unauthorized = lazy(() => import ('../pages/Unauthorized.jsx'));
const HomePage = lazy(() => import('../pages/home/HomePage.jsx'));

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  {
    path: '*',
    element: <Unauthorized/>
  }
];

