import CardBack from '../cards/CardBack';
import Boolean from '../cards/Boolean';
import Ping from '../cards/Ping';
import BattleWednesdayFrog from "../cards/battleWednesdayFrog";

export default class DeckHandler {
    constructor(scene) {
        this.dealCard = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                boolean: new Boolean(scene),
                ping: new Ping(scene),
                battleWednesdayFrog: new BattleWednesdayFrog(scene)
            }
            let newCard = cards[name];
            return(newCard.render(x, y, type));
        }
    }
}