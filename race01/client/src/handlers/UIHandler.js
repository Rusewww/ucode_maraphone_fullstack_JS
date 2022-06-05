import ZoneHandler from './ZoneHandler';

export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZones = () => {

            scene.dropZone = this.zoneHandler.renderZonePlayer(400, 500);
            this.zoneHandler.renderOutlinePlayer(scene.dropZone);

            scene.dropZone = this.zoneHandler.renderZoneEnemy(800, 500);
            this.zoneHandler.renderOutlineEnemy(scene.dropZone);
        }

        this.buildPlayerAreas = () => {

            scene.playerHandArea = scene.add.rectangle(470, 860, 850, 230);
            scene.playerHandArea.setStrokeStyle(4, 0xff69b4);
            scene.playerDeckArea = scene.add.rectangle(1700, 860, 155, 215);
            scene.playerDeckArea.setStrokeStyle(4, 0x00ffff);
            
            scene.opponentHandArea = scene.add.rectangle(470, 135, 850, 230);
            scene.opponentHandArea.setStrokeStyle(4, 0xff69b4);
            scene.opponentDeckArea = scene.add.rectangle(1700, 135, 155, 215);
            scene.opponentDeckArea.setStrokeStyle(4, 0x00ffff);
            
        }

        this.buildGameText = () => {
            scene.dealCards = scene.add.text(960, 445, "Deal Cards").setFontSize(14).setFontFamily('Trebuchet MS');
        }

        this.buildUI = () => {
            this.buildZones();
            this.buildPlayerAreas();
            this.buildGameText();
        }

    }
}