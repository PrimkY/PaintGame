import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const StyledLoggingPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3498db;
  position: relative;
  button {
    border-color: deepskyblue;
    color: #fff;
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    border-radius: 0.6em;
  }
  .header_style{
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin-top: 0;
    padding-top: 2em;
    flex-wrap: nowrap;
    border: 0px solid;
  }
  main {
    display: flex;
    padding-top: 10%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input {
        height: 70px;
        width: 200px;
        border-radius: 2em;
        text-align: center;
        margin-top: 20px;
      }
      button {
        margin-top: 20px;
      }
    }
  }
  .footer {
    position: absolute;
    width: 100vw;
    bottom: 30px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    a{
      text-decoration: none;
      color: #000
    }    
  }
`;

const LoggingLayout = (props) => {
  const navigate = useNavigate();
  return (
    <StyledLoggingPage>
      <header>
        <ul className={'header_style'}>
          <li>
            <button onClick={()=> {
            navigate('/score');
          }}>User score</button>
          </li>
          <li>
            <button onClick={()=> {
            navigate('/about');
          }}>About</button>
          </li>
        </ul>
      </header>
      <main>{props.children}</main>
      <footer className={'footer'}>

         <a href="" target={"_blank"}>Mail to author</a>
         <a href="" target={"_blank"}>Telegram to author</a>
         <a href="" target={"_blank"}>GitHub of this project</a>

      </footer>
    </StyledLoggingPage>
  );
};

export default LoggingLayout;
