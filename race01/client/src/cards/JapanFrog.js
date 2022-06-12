import Card from "./Card";

export default class JapanFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "japanFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "japanFrog";
        this.opponentCardSprite = "japanFrog";
    }
}