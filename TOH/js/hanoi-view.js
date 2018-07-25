class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
  }
  
  setupTowers() {
    const $ul1 = $("<ul></ul>");
    $ul.data("id", 1);
    for (let i = 0; i < 3; i++) {
      const $li = $("<li></li>");
      $li.data("disc", i + 1);
      $ul1.append($li);
    }
    const $ul2 = $("<ul></ul>");
    $ul.data("id", 2);
    
    const $ul3 = $("<ul></ul>");
    $ul.data("id", 3);
    
    this.rootEl.append($ul1);
  }
}


module.exports = View;