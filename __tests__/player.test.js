import Player from "./../src/player.js";

describe("Player", () => {
  test("should correctly create a player object three keys", () => {
    const player = new Player(0, 0, 0);
    expect(player.roll).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
  });

  test("should return a random number between 1-6", () => {
    const player = new Player(0, 0, 0);
    expect(player.rollDice()).toEqual(expect.any(Number));   //player.roll = 
  });

  test("should return an updated value to totalscore from roundscore", () => {
    const player = new Player(0, 10, 0);
    expect(player.hold()).toEqual(10);
  });
});
