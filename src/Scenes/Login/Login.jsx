import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/userSlice';
import Form from '/src/Components/Form/Form';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('You should register first)'))
  }

  return (
      <Form
        title='login'
        handleClick={handleLogin}
      />
  )
}

export default LogIn
