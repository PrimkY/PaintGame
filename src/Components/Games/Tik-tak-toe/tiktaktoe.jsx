import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTicTakToe = styled.div`
  .turn {
    background-color: #3498db;
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    width: 130px;
    height: 60px;
    border-radius: 0.6em;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .start_div {
    width: 80%;
    padding-top: 20px;
    padding-left: 10vw;
    display: flex;
    justify-content: space-between;
  }

  .end_div {
    width: 80%;
    padding-top: 20px;
    padding-left: 10vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  ul {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    height: 60%;
    li{
      flex: 1 1 calc((100% / 3) - 2rem);
      height: 100px;
      border: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    color: #e74c3c;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-color: #3498db;
    color: #fff;
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
  }
  button:hover, button:focus {
    color: #fff;
    outline: 0;
  }

  button:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }

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
