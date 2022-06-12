import Card from "./Card";

export default class KingFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "kingFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "kingFrog";
        this.opponentCardSprite = "kingFrog";
    }
}