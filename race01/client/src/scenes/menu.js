
export default class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    preload(){
        this.load.image('sprBtnPlay', 'src/assets/CyanCardBack.png');
        this.load.image('sprBtnPlayHover', 'src/assets/MagentaCardBack.png');
    }

    create() {
        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.3,
            this.game.config.height * 0.3,
            "sprBtnPlay"
        );

        this.btnPlay.setInteractive();

        this.btnPlay.on("pointerover", function() {
            this.btnPlay.setTexture("sprBtnPlayHover"); // установка текстуры для кнопки
        }, this);

        this.btnPlay.on("pointerout", function() {
            this.setTexture("sprBtnPlay");
        });

        this.btnPlay.on("pointerup", function() {
            this.btnPlay.setTexture("sprBtnPlay");
            this.scene.start("Game");
        }, this);
    }

    update() {
    }
}