import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
// eslint-disable-next-line import/extensions,import/no-unresolved
import FormikInput from '../../Components/FormikFields/FormikInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../store/userSlice';
// eslint-disable-next-line import/no-unresolved
import './login.scss';
import axios from "axios";
import { fetchUsers } from "../../API/userAPI"

const StyledLoginPage = styled.div`
  background-color: ${ props => props.theme.loginPageBackground };
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const LoginPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { theme, setTheme } = useContext(globalThemeContext);
  const [auth, setAuth] = useState(true);
  const [authError, setAuthError] = useState('');

  const initialFormValues = {
    userName: '',
    email: '',
    password: '',
  };

  const validateForm = (formValues) => {
    let isValid = true;
    let errorsObject = {};
  };

  return (
    <StyledLoginPage>
      <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={
        (formValues)=>{
          axios.post(`http://localhost:8000/${auth ? 'login' : 'users'}`, {
            id: formValues.id,
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            score: formValues.score,
          }).then(()=>{
            fetchUsers().then(response => {
              const findUser = response.data.find((mail) => mail.email === formValues.email);
              dispatch({type: 'userLogIn', payload: {name: auth ? findUser.name : formValues.name, password: formValues.password, id: auth ? findUser.id : formValues.id}});
              navigate('/');
            })
          });
          dispatch({ type: 'userLoggedIn', payload: { password:formValues.password, name:formValues.userName, email: formValues.email } });
          setAuth(true);
          setTimeout(() => {
            navigate('/');
          });
        }
      }>
        <Form>
          <FormikInput name={'email'} placeholder={'Input email'} type={'email'} required />
          <FormikInput name={'name'} placeholder={'Input name'} type={'text'} required />
          <FormikInput name={'password'} placeholder={'Input password'} type={'password'}/>
          <button type={'submit'}>Login</button>
        </Form>
      </Formik>
    </StyledLoginPage>
  );
};

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default LoginPage;
