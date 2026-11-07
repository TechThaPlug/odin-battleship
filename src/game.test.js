import Game from "./game.js";

test("creates two players", () => {
  const game = new Game();

  expect(game.player1).toBeDefined();
  expect(game.player2).toBeDefined();
});