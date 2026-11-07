import Player from "./player.js";

test("player has a gameboard", () => {
  const player = new Player();

  expect(player.gameboard).toBeDefined();
});

test("computer can attack", () => {
  const player = new Player();
  const computer = new Player();

  computer.attack(player.gameboard, 0, 0);

  expect(player.gameboard.missedAttacks.length).toBe(1);
});