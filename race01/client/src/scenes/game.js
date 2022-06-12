import CardHandler from '../handlers/CardHandler';
import DeckHandler from '../handlers/DeckHandler';
import GameHandler from '../handlers/GameHandler';
import InteractiveHandler from '../handlers/InteractiveHandler';
import SocketHandler from '../handlers/SocketHandler';
import UIHandler from '../handlers/UIHandler';
import BackgroundHandler from '../handlers/backgroundHandler';
//import PlayerHead from '../handlers/PlayerHead';

export default class Game extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
        this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');

        this.load.image('battleWednesdayFrog', 'src/assets/battle_Wednesday_Frog.png');
        //this.load.image('battleWednesdayFrogEnemy', 'src/assets/battle_Wednesday_Frog.png');
        this.load.image('pixelFrog', 'src/assets/Pixel_frog.png');
        //this.load.image('magentaBoolean', 'src/assets/Magenta_Boolean3x.png');
        this.load.image('ukrainianFrog', 'src/assets/Ukrainian_frog.png');
        //this.load.image('magentaPing', 'src/assets/Magenta_Ping3x.png');
        this.load.image('aristocratFrog', 'src/assets/Aristocrat_frog.png');
        //

        this.load.image('classicFrog', 'src/assets/Classic_frog.png');
        //
        this.load.image('workFrog', 'src/assets/Frog_on_work.png');
        //
        this.load.image('jabaka', 'src/assets/Jabaka.png');
        //
        this.load.image('japanFrog', 'src/assets/Japan_frog.png');
        //
        this.load.image('kingFrog', 'src/assets/King_frog.png');
        //
        this.load.image('jodaFrog', 'src/assets/Joda_frog.png');
        //
        this.load.image('samuraiFrog', 'src/assets/Samurai_frog.png');
        //
        this.load.image('underwaterFrog', 'src/assets/Underwater_frog.png');
        //

        this.load.image('background','src/assets/back_menu.jpg');
        
    }

    create() {
        this.backgroundHandler = new BackgroundHandler(this);
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        //this.PlayerHead = new PlayerHead(this);
        this.InteractiveHandler = new InteractiveHandler(this);


    }

    update() {

    }
}