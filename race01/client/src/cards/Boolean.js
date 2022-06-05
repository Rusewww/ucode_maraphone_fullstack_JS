import Card from "./Card.js";

export default class Boolean extends Card {
    constructor(scene) {
        super(scene);
        this.name = "boolean";
        this.attack = 10;
        this.deffence = 15;
        this.playerCardSprite = "cyanBoolean";
        this.opponentCardSprite = "magentaBoolean";
    }


}