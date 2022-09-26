import React, {FC, useEffect, useState} from 'react';
import {Board} from "../checkersModels/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../checkersModels/Cell";
import {Player} from "../checkersModels/Player";
import {current} from "@reduxjs/toolkit";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedSell]=useState<Cell | null>(null)

  function click(cell: Cell){
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedSell(null);
    } else {
      if(cell.figure?.color === currentPlayer?.color){
        setSelectedSell(cell)
      }
    }
  }

  useEffect(()=> {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
      <h3>Current player {currentPlayer?.color}</h3>
      <div className={'board'}>
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                click={click}
                cell={cell}
                key ={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>

  );
};

export default BoardComponent;
