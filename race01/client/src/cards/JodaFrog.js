import Card from "./Card";

export default class JodaFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "jodaFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "jodaFrog";
        this.opponentCardSprite = "jodaFrog";
    }
}