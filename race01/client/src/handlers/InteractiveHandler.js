export default class InteractiveHandler{

    constructor(scene) {
        //dealCards button
        scene.dealCards.on('pointerdown', () => {
            scene.socket.emit('dealCards', scene.socket.id);
            scene.dealCards.disableInteractive();
        })
        scene.dealCards.on('pointerover', () => {
            scene.dealCards.setColor('0xFF0000');
        })
        scene.dealCards.on('pointerout', () => {
            scene.dealCards.setColor('0x00FFFF');
        })

        scene.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setTint(0xFF0000);
            scene.children.bringToTop(gameObject);
        })

        scene.input.on('dragend', (pointer, gameObject, dropped) => {
            gameObject.setTint();
            if(!dropped){
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })
        scene.input.on('drop', (pointer, gameObject, dropZone) => {
            if(scene.GameHandler.isMyTurn && scene.GameHandler.gameState === "Ready") {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                scene.input.setDraggable(gameObject, false);
                scene.socket.emit('cardPlayed', gameObject.data.values.name, scene.socket.id);

            } else {
              gameObject.x = gameObject.input.dragStartX;
              gameObject.y = gameObject.input.dragStartY;
            }
        })
    }
}