import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/named
import { Route, Routes, Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';

const StyledHeaderItems = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${ props => props.theme.lightGreenColor };
`;

const StyledList = styled.ul`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <StyledHeaderItems>
      <header>
        <StyledList>
        <div className={'logo'}>logo</div>
          <div>Score Board</div>
        <div className={'login'}>
         <div onClick={()=> navigate('/login') }>Sign in/Sign up</div>
        </div>
        </StyledList>
      </header>
    </StyledHeaderItems>
  );
};

export default Header;
