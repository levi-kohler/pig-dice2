export default function Player(roll, roundScore, totalScore) {
  this.roll = roll;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

Player.prototype.rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
};

Player.prototype.hold = function () {

}