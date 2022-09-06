import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Login from '../Scenes/Login/Login';
// eslint-disable-next-line import/extensions,import/no-unresolved
import MainLayout from '../Layouts/MainLayout';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Game from '../Components/Game';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Rooms from '../Components/Rooms';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Roommates from '../Components/Roommates';

const RootRouter = () => {
  const user = false;
  const [redirectLocation, setRedirectLocation] = useState();
  const { location } = useLocation();

  // const renderForGuestUser = (Scene) => {
  //   if (!user) {
  //     return <Scene/>;
  //   } else {
  //     return <Navigate to={ redirectLocation || '/main'}/>;
  //   }
  // };
  //
  // const renderForLoggedUser = (Scene) => {
  //   if (!user) {
  //     return Scene;
  //   } else {
  //     setRedirectLocation(location);
  //     return <Navigate to={'/guest'}/>;
  //   }
  // };

  return (
    <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/guest'} element={<MainLayout><Game/></MainLayout>}>
       {/*unlogged user*/}
      </Route>
      <Route path={'/'} element={<MainLayout><Rooms/><Game/></MainLayout>}>
      {/*logged user*/}
      </Route>
    </Routes>
  );
};

RootRouter.propTypes = {};

export default RootRouter;
