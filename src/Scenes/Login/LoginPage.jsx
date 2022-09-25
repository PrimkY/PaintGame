import React from 'react';
import {useNavigate} from "react-router-dom";
import LogIn from "./Login";
import LoggingLayout from "../../Layouts/LoggingLayout";
import {useDispatch} from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {setUser} from "../../store/userSlice";
import { auth } from "../../constants/Firebase";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();


  return (
    <LoggingLayout>
      <h1>
       Log in
      </h1>
      <LogIn/>
      <p>If you don't have an account you should visit register page</p>
      <button onClick={()=> {
        navigate('/register')
      }}>
        to register
      </button>
    </LoggingLayout>
  );
};

export default LoginPage;
