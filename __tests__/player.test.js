import Player from "./../src/player.js";

describe("Player", () => {
  test("should correctly create a player object three keys", () => {
    const player = new Player(0, 0, 0);
    expect(player.roll).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
  });
});