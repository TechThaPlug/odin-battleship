import Gameboard from "./gameboard.js";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  attack(enemyGameboard, row, column) {
    enemyGameboard.receiveAttack(row, column);
  }
}