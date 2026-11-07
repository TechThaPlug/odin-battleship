import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
    this.board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => null)
    );
  }

  placeShip(ship, row, column, direction) {
    this.ships.push(ship);

    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        this.board[row][column + i] = ship;
      } else {
        this.board[row + i][column] = ship;
      }
    }
  }

  receiveAttack(row, column) {
    const ship = this.board[row][column];

    if (ship) {
      ship.hit();
    } else {
      this.missedAttacks.push([row, column]);
    }
  }
}