import Card from "./Card";

//One of cards - remake

export default class Boolean extends Card {
    super(scene) {
        this.name = "boolean";
        this.playerCardSprite = "cyanBoolean";
        this.opponentCardSprite = "magentaBoolean";
    }
}