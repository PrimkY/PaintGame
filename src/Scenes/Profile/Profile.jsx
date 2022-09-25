import React from 'react';
import {useDispatch} from "react-redux";
import { useAuth } from '/src/hooks/use-auth';
import { useNavigate } from "react-router-dom";
import { removeUser } from '/src/store/userSlice'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

const StyledProfile = styled.div`
  width: 100%;
  right: 0;
  height: 85vh;
`;

const Profile = (props) => {
  const {isAuth, email} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return isAuth ? (
    <StyledProfile>
      <Navbar/>

      <button
        onClick={()=> {
          dispatch(removeUser())
        }}

      >Log out from {email}</button>
    </StyledProfile>
    ) : (navigate('/login'))

};

export default Profile;
