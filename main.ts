input.onButtonPressed(Button.A, function () {
    puntua.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        let sprite: game.LedSprite = null
        sprite.set(LedSpriteProperty.X, 0)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.SmallDiamond)
    for (let index = 0; index < 4; index++) {
        puntua.set(LedSpriteProperty.Y, -4)
    }
})
input.onButtonPressed(Button.B, function () {
    puntua.move(1)
})
let puntua: game.LedSprite = null
puntua = game.createSprite(2, 0)
basic.forever(function () {
	
})
