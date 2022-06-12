import Card from "./Card";

export default class ClassicFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "classicFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "classicFrog";
        this.opponentCardSprite = "classicFrog";
    }
}