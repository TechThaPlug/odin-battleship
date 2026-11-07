import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

test("places a ship", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 0, 0, "horizontal");

  expect(gameboard.ships.length).toBe(1);
});

test("records a missed attack", () => {
  const gameboard = new Gameboard();

  gameboard.receiveAttack(0, 0);

  expect(gameboard.missedAttacks.length).toBe(1);
});