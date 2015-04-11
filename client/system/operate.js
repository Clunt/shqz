Game.System.Operate = function(game) {
  this.game = game;
  this.moveClock = {
    time: 0,
    state: false
  };
}
Game.System.Operate.prototype = {
  create: function() {
    this.game.input.onDown.add(this.click, this);
    // this.game.input.addMoveCallback(this.mouse, this);
  },
  click: function(pointer, ent) {
    var positoin = {
      x: this.game.custom.map.collision.getTileX(pointer.worldX),
      y: this.game.custom.map.collision.getTileY(pointer.worldY)
    };
    var tile = this.game.custom.map.getTile(positoin.x, positoin.y, this.game.custom.map.collision);
    if (!tile.collides) {
      Game.player.move(tile);
    }
  },
  mouse: function(pointer, worldX, worldY, isDown) {
    // if (pointer.isDown) {
    //   if (this.moveClock.time === 0) {
    //     this.moveClock.time = this.game.time.now;
    //   } else if (this.game.time.now - this.moveClock.time > 500 && !isDown) {
    //     this.moveClock.time = this.game.time.now;
    //     Game.player.move(pointer.worldX, pointer.worldY);
    //   }
    // } else {
    //   this.moveClock.time = 0;
    // }
  }
};