import CardHandler from "../handlers/CardHandler";
import DeckHandler from "../handlers/DeckHandler";
import InteractiveHandler from "../handlers/InteractiveHandler";
import SocketHandler from "../handlers/SocketHandler";
import GameHandler from "../handlers/GameHandler"
import UIHandler from "../handlers/UIHandler";

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    }

    preload(){
        this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
        this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
        this.load.image('cyanBoolean', 'src/assets/Cyan_Boolean3x.png');
        this.load.image('magentaBoolean', 'src/assets/Magenta_Boolean3x.png');
        this.load.image('cyanPing', 'src/assets/Cyan_Ping3x.png');
        this.load.image('magentaPing', 'src/assets/Magenta_Ping3x.png');
    }

    create(){
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIhandler = new UIHandler(this);
        this.UIhandler.buildUI();
        this.InteractiveHandler = new InteractiveHandler(this);
    }
    uploaded(){

    }
}