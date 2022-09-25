import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../store/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: silver;
`;


const Navbar = () => {
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
      <div>
          {isAuth ?
            <StyledNav>
              <Button variant={"outlined"} color={"secondary"} onClick={()=> {navigate('/profile')}}>Profile</Button>
              <Button variant={"outlined"} color={"secondary"} onClick={()=> {navigate('/home')}}>Home</Button>
              <Button variant={"outlined"} color={"secondary"} onClick={()=> {dispatch(removeUser())}}>Log Out</Button>
            </StyledNav>
          :
            <Button variant={"outlined"} color={"secondary"}>Log In</Button>}
      </div>

  );
};

export default Navbar;
