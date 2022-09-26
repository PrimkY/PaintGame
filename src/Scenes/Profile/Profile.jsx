import React from 'react';
import {useDispatch} from "react-redux";
import { useAuth } from '/src/hooks/use-auth';
import { useNavigate } from "react-router-dom";
import { removeUser } from '/src/store/userSlice'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import {store} from "../../store/initStore";

const StyledProfile = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-family: Roboto;
    font-size: 16pt;
  }
  button {
    font-size: 14pt;
    margin-top: 20px;
    border-radius: 10px;
    height: 30px;
  }
`;

const Profile = (props) => {
  const {isAuth, email} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = store.getState();

  return isAuth ? (
    <StyledProfile>
      <p>Welcome to my app, dear {user.user.email ? user.user.email : email}!</p>
      <p>There is two ways to spend your time</p>
      <p>Upside bar using for theme switch</p>
      <p>You can play
      <button onClick={()=> {
        navigate('/tiktaktoe')
      }}>tiktaktoe  </button>
      </p>
      <p>Tou can play
      <button onClick={()=> {
        navigate('/checkers')
      }}>checkers</button>
      </p>
      <button
        onClick={()=> {
          dispatch(removeUser())
        }}
      >Log out from {email}</button>
    </StyledProfile>
    ) : (navigate('/login'))

};

export default Profile;
