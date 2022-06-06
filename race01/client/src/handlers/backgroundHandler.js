//background edit picture

function BackGround(scene) {
    this.picObj = null;
    this.init(scene);
}

BackGround.prototype.init = function (scene) {
    this.picObj = this.setPic(scene);

}

BackGround.prototype.setPic = function (scene) {
    let background = scene.add.image(500, 500, 'background');
    return background;
}

module.exports = BackGround;