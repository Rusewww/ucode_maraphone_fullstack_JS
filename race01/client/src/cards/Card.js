//Card class: add health, and attack

export default class Card{
    constructor(scene) {
        let sprite;
        this.render = (x, y, type) => {
            if (type === 'playerCard'){
                sprite = this.playerCardSprite;
            } else {
                sprite = this.opponentCardSprite;
            }
            let card = scene.add.image(x, y, sprite).setScale(0.25, 0.25).setInteractive().setData({
                "name": this.name,
                "type": type,
                "sprite": sprite
            });
            if (type === 'playerCard') {
                scene.input.setDraggable(card);
            }
            return card;
        }
    }
}