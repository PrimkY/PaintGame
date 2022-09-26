import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i+j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // black
        }
        else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // white
        }
      }
      this.cells.push(row)
    }
  }

    public getCopyBoard() : Board {
      const newBoard = new Board();
      newBoard.cells = this.cells;
      return newBoard
    }

    public highlightCells(selectedCell: Cell | null) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];
          target.available = !!selectedCell?.figure?.canMove(target)
        }
      }
    }


    public getCell(x: number, y: number) {
    return this.cells[y][x]
    }

    private addPawns () {
      new Pawn(Colors.BLACK, this.getCell(1,0))
      new Pawn(Colors.BLACK, this.getCell(3,0))
      new Pawn(Colors.BLACK, this.getCell(5,0))
      new Pawn(Colors.BLACK, this.getCell(7,0))
      new Pawn(Colors.BLACK, this.getCell(0,1))
      new Pawn(Colors.BLACK, this.getCell(2,1))
      new Pawn(Colors.BLACK, this.getCell(4,1))
      new Pawn(Colors.BLACK, this.getCell(6,1))
      new Pawn(Colors.BLACK, this.getCell(1,2))
      new Pawn(Colors.BLACK, this.getCell(3,2))
      new Pawn(Colors.BLACK, this.getCell(5,2))
      new Pawn(Colors.BLACK, this.getCell(7,2))

      new Pawn(Colors.WHITE, this.getCell(0,5))
      new Pawn(Colors.WHITE, this.getCell(2,5))
      new Pawn(Colors.WHITE, this.getCell(4,5))
      new Pawn(Colors.WHITE, this.getCell(6,5))
      new Pawn(Colors.WHITE, this.getCell(1,6))
      new Pawn(Colors.WHITE, this.getCell(3,6))
      new Pawn(Colors.WHITE, this.getCell(5,6))
      new Pawn(Colors.WHITE, this.getCell(7,6))
      new Pawn(Colors.WHITE, this.getCell(0,7))
      new Pawn(Colors.WHITE, this.getCell(2,7))
      new Pawn(Colors.WHITE, this.getCell(4,7))
      new Pawn(Colors.WHITE, this.getCell(6,7))
    }

    private addQueens () {

    }

    public addFigures() {
      this.addPawns()
      this.addQueens()
    }
}
