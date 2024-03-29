import { Colors } from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import logo from './/src/Components/Games/Checkers/checkersAssets/black_checker.png'

export enum FigureNames {
    FIGURE="Figure",
    PAWN = "Pawn",
    QUEEN = "Queen",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;


  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell) : boolean {
    if(target.figure?.color === this.color)
      return false
    return true
  }
  moveFigure(target: Cell) {

  }
}
