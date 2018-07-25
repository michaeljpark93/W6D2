const View = require("./hanoi-view.js");
const Game = require("../solution/game.js");

$( () => {
  const $rootEl = $('.toh');
  const game = new Game();
  new HanoiView(game, $rootEl);
});