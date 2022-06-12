import Card from "./Card";

export default class SamuraiFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "samuraiFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "samuraiFrog";
        this.opponentCardSprite = "samuraiFrog";
    }
}