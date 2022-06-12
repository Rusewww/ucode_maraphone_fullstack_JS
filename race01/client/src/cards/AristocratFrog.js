import Card from "./Card";

export default class AristocratFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "aristocratFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "aristocratFrog";
        this.opponentCardSprite = "aristocratFrog";
    }
}