import React from 'react';
import {useNavigate} from "react-router-dom";
import SignUp from "./Register";
import LoggingLayout from "../../Layouts/LoggingLayout";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <LoggingLayout>
      <h1>
        Register
      </h1>
      <SignUp/>
      <p>If you already have an account turn back to login page</p>
      <button onClick={()=> {
        navigate('/login')
      }}>
        to log in
      </button>
    </LoggingLayout>
  );
};

export default RegisterPage;
