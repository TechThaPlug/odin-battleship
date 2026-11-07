import Player from "./player.js";

export default class Game {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }
}