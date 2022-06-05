import Phaser from "phaser";
import Menu from "./scenes/menu.js";
import Game from "./scenes/game.js";

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1920,
        height: 1080
    },
    scene: [
        Menu,
        Game
    ]
};

const game = new Phaser.Game(config);