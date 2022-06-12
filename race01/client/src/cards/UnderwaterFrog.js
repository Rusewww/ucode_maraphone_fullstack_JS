import Card from "./Card";

export default class UnderwaterFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "underwaterFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "underwaterFrog";
        this.opponentCardSprite = "underwaterFrog";
    }
}