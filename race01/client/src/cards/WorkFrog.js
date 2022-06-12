import Card from "./Card";

export default class WorkFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "workFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "workFrog";
        this.opponentCardSprite = "workFrog";
    }
}