import UIHandler from "../handlers/UIHandler";

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    }

    preload(){

    }
    create(){
        this.UIhandler = new UIHandler(this);
        this.UIhandler.buildUI();
    }
    uploaded(){

    }
}