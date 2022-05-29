import Card from "./Card";

//One of cards - remake

export default class Ping extends Card {
    super(scene) {
        this.name = "ping";
        this.playerCardSprite = "cyanPing";
        this.opponentCardSprite = "magentaPing";
    }
}