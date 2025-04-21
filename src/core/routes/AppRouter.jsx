import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/home/HomePage.jsx';
import Unauthorized from '../pages/Unauthorized.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
