import Card from "./Card.js";

export default class ukrainianFrog extends Card {
    constructor(scene) {
        super(scene);
        this.attack = 15;
        this.deffence = 10;
        this.cost = 2;
        this.name = "ukrainianFrog";
        this.playerCardSprite = "ukrainianFrog";
        this.opponentCardSprite = "ukrainianFrog";
    }
}