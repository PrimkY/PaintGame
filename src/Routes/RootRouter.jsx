import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "../Scenes/Login/LoginPage";
import Profile from "../Scenes/Profile/Profile";
import Score from "../Scenes/Score/score";
import RegisterPage from "../Scenes/Login/RegisterPage";
import {useAuth} from "../hooks/use-auth";
import TikTakToe from "../Components/Games/Tik-tak-toe/tiktaktoe";
import Navbar from "../Components/Navbar";
import Checkers from "../Components/Games/Checkers/Checkers";
import Root from "../Components/Root/themeChanger";
import ThemeProvider from "../provider/ThemeProvider";


  const RootRouter = () => {
    const {isAuth, email} = useAuth();
    return isAuth ?(
      <Routes>
        <Route key={'profile'} path={'/profile'} element={<ThemeProvider><Navbar/><Root/><Profile/></ThemeProvider>}/>
        <Route key={'score'} path={'/score'} element={<ThemeProvider><Navbar/><Score/></ThemeProvider>}/>
        <Route key={'tiktaktoe'} path={'/tiktaktoe'} element={<ThemeProvider><Navbar/><Root/><TikTakToe/></ThemeProvider>}/>
        <Route key={'checkers'} path={'/checkers'} element={<ThemeProvider><Navbar/><Root/><Checkers/></ThemeProvider>}/>

        <Route path='*' element={<Navigate to={'/home'} replace/>}/>
      </Routes>
      ) : (
      <Routes>
        <Route key={'login'} path={'/login'} element={<ThemeProvider><LoginPage/></ThemeProvider>}/>
        <Route key={'register'} path={'/register'} element={<ThemeProvider><RegisterPage/></ThemeProvider>}/>
        <Route key={'score'} path={'/score'} element={<ThemeProvider><Navbar/><Score/></ThemeProvider>}/>
        <Route path='*' element={<Navigate to={'/login'} replace/>}/>
      </Routes>
    );
  }

export default RootRouter;
