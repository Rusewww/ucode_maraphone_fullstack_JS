import Card from "./Card";

export default class PixelFrog extends Card {
    constructor(scene) {
        super(scene);
        this.name = "pixelFrog";
        this.attack = 10;
        this.health = 15;
        this.cost = 1;
        this.playerCardSprite = "pixelFrog";
        this.opponentCardSprite = "pixelFrog";
    }
}