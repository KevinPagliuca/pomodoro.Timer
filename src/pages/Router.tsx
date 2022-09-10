import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { History } from './History';
import { Home } from './Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
