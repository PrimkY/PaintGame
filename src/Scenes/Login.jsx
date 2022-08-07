import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
// eslint-disable-next-line import/extensions,import/no-unresolved
import FormikInput from '../Components/FormikFields/FormikInput';
import { useNavigate } from 'react-router-dom';

const StyledLoginPage = styled.div`
  background-color: ${ props => props.theme.loginPageBackground };
`;


const LoginPage = (props) => {
  const navigate = useNavigate();
  return (
    <StyledLoginPage>
      <Formik onSubmit={
        ()=>{
          navigate('/list');
        }
      } validate={(formData)=>{
        let isValid = true;
        const errors = {};

        if (!formData.login) {
          isValid = false;
          errors.login = 'Login incorrect';
        }
        if (!formData.password) {
          isValid = false;
          errors.password = 'password incorrect';
        }
        if (!isValid) return errors;
      }}>
        <Form>
          <FormikInput name={'login'} placeholder={'Input login'} type={'email'}/>
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
