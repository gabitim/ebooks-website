import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/main-page';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/books' element={<MainPage />} />
    </Routes>
  );
};

export default Router;
