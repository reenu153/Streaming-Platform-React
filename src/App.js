import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { ShowDetails } from './pages/ShowDetails';
import { Header } from './components/Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#09090B]">
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<ShowDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
