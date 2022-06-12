import Card from "./Card";

export default class Boolean extends Card {
    constructor(data) {
        super(data);
        this.name = "boolean";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "cyanBoolean";
        this.opponentCardSprite = "magentaBoolean";
    }


}