import React, {useEffect, useState} from 'react';
import './Checkers.css';
import BoardComponent from "./checkersComponent/BoardComponent";
import {Board} from "./checkersModels/Board";
import {Player} from "./checkersModels/Player";
import {Colors} from "./checkersModels/Colors";

const Checkers = () => {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)


  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  },[])


  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className={'app'}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
};

export default Checkers;
