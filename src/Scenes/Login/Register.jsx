import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/userSlice';
import Form from '/src/Components/Form/Form';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          isLoggedIN: true,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/home');
      })
      .catch(console.error)
  }

   return (
      <Form
        title='register'
        handleClick={handleRegister}
      />
  )
}

export default SignUp
