import {Cell} from "../Cell";
import {Colors} from "../Colors";
import {Figure, FigureNames} from "./Figure";

const blackLogo = require('../../checkersAssets/black_checker.png')
const whiteLogo = require('../../checkersAssets/white_checker.png')

export class Pawn extends Figure {

  isAttack : boolean = false;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false
    if(this.cell.isEmptyDiagonal(target))
      return true
    return false
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
  }
}

