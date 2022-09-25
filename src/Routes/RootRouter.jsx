import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "../Scenes/Login/LoginPage";
import Profile from "../Scenes/Profile/Profile";
import MainLayout from "../Layouts/MainLayout";
import Score from "../Scenes/Score/score";
import RegisterPage from "../Scenes/Login/RegisterPage";
import {useAuth} from "../hooks/use-auth";
import HomePage from "../Components/HomePage";

  const RootRouter = () => {
    const {isAuth, email} = useAuth();

    return isAuth ?(
      <Routes>
        <Route key={'home'} path={'/home'} element={<HomePage/>}/>
        <Route key={'profile'} path={'/profile'} element={<MainLayout><Profile/></MainLayout>}/>
        <Route key={'score'} path={'/score'} element={<MainLayout><Score/></MainLayout>}/>
        <Route path='*' element={<Navigate to={'/home'} replace/>}/>
      </Routes>
      ) : (
      <Routes>
        <Route key={'login'} path={'/login'} element={<LoginPage/>}/>
        <Route key={'register'} path={'/register'} element={<RegisterPage/>}/>
        <Route path='*' element={<Navigate to={'/login'} replace/>}/>
      </Routes>
    );
  }

export default RootRouter;
