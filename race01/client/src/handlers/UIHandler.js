export default class UIHandler{
    constructor(scene) {
        this.buildGameText = () => {
            scene.dealCards = scene.add.text(960, 445, "Deal Cards");
        }
        this.buildUI = () => {
            this.buildGameText();
        }

    }
}