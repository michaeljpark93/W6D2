class View {
  
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // const pos;
    $("ul").on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    $square.addClass("selected");
    const player = `${this.game.currentPlayer}`;
    $square.text(player);
    this.game.playMove($square.data("pos"));
    if (this.game.winner()) {
      $("footer").text(`You win, ${player}`);
    }
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    const $footer = $("<footer></footer>");
    // const $body = $("body");
    
    for (let i = 0; i < 9; i++) {
      let $li = $("<li></li>");
      const POS = {
        0: [0, 0],
        1: [0, 1],
        2: [0, 2],
        3: [1, 0],
        4: [1, 1],
        5: [1, 2],
        6: [2, 0],
        7: [2, 1],
        8: [2, 2]
      };
      
      $li.data("pos", POS[i]);
      $ul.append($li);
  }
    this.$el.append($ul);
    this.$el.append($footer);
  }
}

module.exports = View;
