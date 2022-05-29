import Card from "./Card";

//One of cards - remake

export default class CardBack extends Card {
    super(scene) {
        this.name = "cardBack";
        this.playerCardSprite = "cyanCardBack";
        this.opponentCardSprite = "magentaCardBack";
    }
}