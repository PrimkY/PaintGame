import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackLogo = require('../../checkersAssets/black_queen.png')
const whiteLogo = require('../../checkersAssets/white_queen.png')

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN
  }
  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false
    return true
  }
}
