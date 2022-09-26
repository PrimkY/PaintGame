import React, {useState} from 'react';
import axios from "axios";
import styled from "styled-components";

const StyledTable = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  table {
    width: 70%;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-collapse: collapse;
  }
  th {
    font-weight: bold;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
  }
  td {
    border: 1px solid #dddddd;
    padding: 5px;
    text-align: center;
  }
`

const Table = () => {
  const [score, setScore] = useState([])

  axios.get('http://localhost:8000/users')
    .then((response)=>{
      response.data.forEach((elem)=>{
      })
      setScore(response.data);
    })

  return (
    <StyledTable>
    <table key={Math.floor(Math.random()*1000000)}>
      <thead key={Math.floor(Math.random()*1000000)}>
        <tr key={Math.floor(Math.random()*1000000)}>
          <th key={Math.floor(Math.random()*1000000)}>Position</th>
          <th key={Math.floor(Math.random()*1000000)}>User</th>
          <th key={Math.floor(Math.random()*1000000)}>TikTakToe Score</th>
          <th key={Math.floor(Math.random()*1000000)}>Checkers Score</th>
        </tr>
      </thead>
      <tbody>
      {score.map((score)=> (
        <tr key={Math.floor(Math.random()*1000000)}>
          <td key={Math.floor(Math.random()*1000000)}>{score.id}</td>
          <td key={Math.floor(Math.random()*1000000)}>{score.name}</td>
          <td key={Math.floor(Math.random()*1000000)}>{score.tiktaktoe}</td>
          <td key={Math.floor(Math.random()*1000000)}>{score.chess}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </StyledTable>
  );
};

export {Table};
