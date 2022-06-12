import Card from "./Card";

export default class Jabaka extends Card {
    constructor(scene) {
        super(scene);
        this.name = "jabaka";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "jabaka";
        this.opponentCardSprite = "jabaka";
    }
}