import Card from "./Card.js";

export default class BattleWednesdayFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "battleWednesdayFrog";
        this.attack = 10;
        this.deffence = 15;
        this.playerCardSprite = "battleWednesdayFrog";
        this.opponentCardSprite = "battleWednesdayFrog";
    }
}