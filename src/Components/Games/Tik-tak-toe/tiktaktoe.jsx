import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTicTakToe = styled.div`
  
  td{
    width: 30%;
    height: 30%;
    border: 1px solid black;
  }
  
`;

const Tiktaktoe = () => {
  const [turn, setTurn] = useState('player1');
  const [cells, setCells] = useState(Array(9).fill(''));

  const handleClick = (num) => {
    let squares = [...cells];

    if (turn === 'player1') {
      squares[num] = 'X';
      setTurn('player2');
    } else {
      squares[num] = 'O';
      setTurn('player1');
    }

    setCells(squares);
  };

  const Cell = (num) => {
    return <td onClick={() => handleClick()}>{cells[num]}</td>;
  };

  return (
    <StyledTicTakToe>
      <table>
        Turn: {turn}
        <tbody>
        <tr>
          <Cell num={0}/>
          <Cell num={1}/>
          <Cell num={2}/>
        </tr>
        <tr>
          <Cell num={3}/>
          <Cell num={4}/>
          <Cell num={5}/>
        </tr>
        <tr>
          <Cell num={6}/>
          <Cell num={7}/>
          <Cell num={8}/>
        </tr>
        </tbody>
      </table>
    </StyledTicTakToe>
  );
};

export default Tiktaktoe;
