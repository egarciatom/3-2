let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        sprite.set(LedSpriteProperty.X, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
