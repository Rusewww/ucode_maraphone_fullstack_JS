import ZoneHandler from "./ZoneHandler";

export default class UIHandler{
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZone = () => {
            scene.dropZone = this.zoneHandler.renderZone(470,500);
            this.zoneHandler.renderOutline(scene.dropZone);
        }

        this.buildPlayerAreas = () => {
            //PlayerArea - change coordinates!
            scene.playerHandArea = scene.add.rectangle(470, 860, 850, 230);
            scene.playerHandArea.setStrokeStyle(4, 0x0000FF);
            scene.playerDeckArea = scene.add.rectangle(1000, 860, 155, 215);
            scene.playerDeckArea.setStrokeStyle(3, 0x66CCCC);

            //EnemyArea - change coordinates!
            scene.opponentHandArea = scene.add.rectangle(470, 135, 850, 230);
            scene.opponentHandArea.setStrokeStyle(4, 0x0000FF);
            scene.opponentDeckArea = scene.add.rectangle(1000, 135, 155, 215);
            scene.opponentDeckArea.setStrokeStyle(3, 0x66CCCC);

        }
        //DealCardButton - change coordinates, makes better
        this.buildGameText = () => {
            scene.dealCards = scene.add.text(960, 445, "Deal Cards");
        }

        this.buildUI = () => {
            this.buildPlayerAreas();
            this.buildZone();
            this.buildGameText();
        }

    }
}