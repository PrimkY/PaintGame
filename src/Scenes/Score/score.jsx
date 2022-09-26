import React from 'react';
import axios from 'axios';
import {Table} from "../../Components/Table/table";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";

const StyledScore = styled.div `
  height: 100vh;
  background-color: beige;
  h2 {
    text-align: center;
  }
`

const Score = () => {


  return (
    <StyledScore>
      <Table/>
      <h2>Improve your score! There is no reason not to be the first!</h2>
    </StyledScore>
  );
};

export default Score;
