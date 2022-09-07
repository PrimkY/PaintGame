import React, { useState } from 'react';
import styled from 'styled-components';
import './tiktaktoe.scss';

const StyledTicTakToe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Tiktaktoe = () => {
  const [turn, setTurn] = useState('');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');

  const coinFlip = () => {
    return Math.random() * 2 > 1 ? setTurn('player1') : setTurn('player2');
  };

  const handleStop = () => {
    setTurn('');
  };

  const checkForWin = (squares) => {
    let combo = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let comboKey in combo) {
      combo[comboKey].forEach((pattern) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(turn);
          handleStop();
          console.log('паттерн',squares[pattern[0]], 'squares: ',squares, 'winner: ',{winner});
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== '') {
      return;
    }
    let squares = [...cells];
    if (checkForWin(squares)) { handleStop() }
    if (turn === 'player1') {
      squares[num] = 'X';
      setTurn('player2');
    } else {
      if (turn === 'player2') {
        squares[num] = 'O';
        setTurn('player1');
      } else {
        return;
      }
    }
    checkForWin(squares);
    setCells(squares);
  };



  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(''));
    setTurn('');
  };

  const Cell = ({ num }) => {
    return <li onClick={() => handleClick(num)}>{cells[num]}</li>;
  };

  return (
    <StyledTicTakToe>
      <div className={'start_div'}>
        <button onClick={() => coinFlip()}>Flip the coin</button>
      <p className={'turn'}>Turn: {turn}</p>
      </div>
      <ul>
        <Cell num={0}/>
        <Cell num={1}/>
        <Cell num={2}/>
        <Cell num={3}/>
        <Cell num={4}/>
        <Cell num={5}/>
        <Cell num={6}/>
        <Cell num={7}/>
        <Cell num={8}/>
      </ul>
      {winner && (
        <div className={'end_div'}>
          <p>{winner} is a winner</p>
          <button onClick={()=> handleRestart()}>Restart</button>
        </div>
      )}
    </StyledTicTakToe>
  );
};

export default Tiktaktoe;
