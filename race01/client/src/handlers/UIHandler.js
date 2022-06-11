import ZoneHandler from './ZoneHandler';
import GameHandler from "./GameHandler";

export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZones = () => {

            scene.dropZonePlayer = this.zoneHandler.renderZonePlayer(960, 680);
            this.zoneHandler.renderOutlinePlayer(scene.dropZonePlayer);

            scene.dropZoneEnemy = this.zoneHandler.renderZoneEnemy(960, 400);
            this.zoneHandler.renderOutlineEnemy(scene.dropZoneEnemy);
        }

        this.buildPlayerAreas = () => {

            scene.playerHandArea = scene.add.rectangle(960, 950, 1000, 230);
            scene.playerHandArea.setStrokeStyle(4, 0xff69b4);
            scene.playerDeckArea = scene.add.rectangle(1700, 950, 155, 215);
            scene.playerDeckArea.setStrokeStyle(4, 0x00ffff);
            
            scene.opponentHandArea = scene.add.rectangle(960, 130, 1000, 230);
            scene.opponentHandArea.setStrokeStyle(4, 0xff69b4);
            scene.opponentDeckArea = scene.add.rectangle(1700, 130, 155, 215);
            scene.opponentDeckArea.setStrokeStyle(4, 0x00ffff);
            
        }

        this.buildGameText = () => {
            scene.dealCards = scene.add.text(100, 445, "Deal Cards").setFontSize(14).setFontFamily('Trebuchet MS');
        }

        this.buildChangeTurnButton = () => {
            scene.changeTurn = scene.add.text(1600, 445, "Change Turn").setFontSize(14).setFontFamily('Trebuchet MS');
        }

        this.buildCostText = () => {
            scene.addCost = scene.add.text(1600, 600, scene.GameHandler.playerCost).setFontSize(14).setFontFamily('Trebuchet MS');
        }

        this.buildUI = () => {
            this.buildZones();
            this.buildPlayerAreas();
            this.buildGameText();
            this.buildChangeTurnButton();
            this.buildCostText();
        }

    }
}