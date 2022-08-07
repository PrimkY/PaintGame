import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Login from '../Scenes/Login';
// eslint-disable-next-line import/extensions,import/no-unresolved
import MainLayout from '../Layouts/MainLayout';

const RootRouter = () => {
  const user = false;
  const [redirectLocation, setRedirectLocation] = useState();
  const { location } = useLocation();

  const renderForGuestUser = (Scene) => {
    if (!user) {
      return <Scene/>;
    } else {
      return <Navigate to={ redirectLocation || '/main'}/>;
    }
  };

  const renderForLoggedUser = (Scene) => {
    if (!user) {
      return Scene;
    } else {
      setRedirectLocation(location);
      return <Navigate to={'/guest'}/>;
    }
  };

  return (
    <Routes>
      <Route path={'/login'} element={<MainLayout><Login/></MainLayout>}/>
      <Route path={'/123'} element={<React.Fragment><Outlet/></React.Fragment>}>
        // logged user
      </Route>
      <Route path={'*'} element={<Navigate to={'/login'}/>}/>
    </Routes>
  );
};

RootRouter.propTypes = {};

export default RootRouter;
