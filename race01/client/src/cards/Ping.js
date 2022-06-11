import Card from "./Card.js";

export default class Ping extends Card {
    constructor(scene) {
        super(scene);
        this.attack = 15;
        this.deffence = 10;
        this.cost = 2;
        this.name = "ping";
        this.playerCardSprite = "cyanPing";
        this.opponentCardSprite = "magentaPing";
    }
}