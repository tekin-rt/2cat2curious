namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hopes_and_pows.vy == 0) {
        hopes_and_pows.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let flower: Sprite = null
let coin: Sprite = null
let hopes_and_pows: Sprite = null
scene.setBackgroundColor(9)
hopes_and_pows = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f f 5 f f 
    f f f f f f f f f f f f f f f f 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f . f . . f . f . . . . . 
    . . . f . f . . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hopes_and_pows, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hopes_and_pows.ay = 250
scene.cameraFollowSprite(hopes_and_pows)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(assets.image`coinn`, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 4 4 4 4 4 4 4 5 f . . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . . f 5 4 4 4 4 4 4 4 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 5 5 f 5 . . . . . 
        . . . . . f 5 4 4 5 f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . . f 5 4 4 5 f . . . . . 
        . . . . . . f 5 5 f 5 . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 5 5 f 5 5 . . . . . . 
        . . . . . 4 f 5 4 f . . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . 4 f 5 4 f . . . . . . 
        . . . . . 5 5 f 5 5 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . f 5 4 5 5 5 5 5 4 5 f . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 4 4 4 4 4 4 4 5 f . . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . . f 5 4 4 4 4 4 4 4 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 5 5 f 5 . . . . . 
        . . . . . f 5 4 4 5 f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . . . f 5 4 4 5 f . . . . . 
        . . . . . . f 5 5 f 5 . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 5 5 f 5 5 . . . . . . 
        . . . . . 4 f 5 4 f . . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . 4 f 5 4 f . . . . . . 
        . . . . . 5 5 f 5 5 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . 3 a . . 2 . 2 3 . . . . . 
            . . . . 3 a 2 2 3 2 . . . . . . 
            . . . . 3 3 5 3 3 5 7 . . . . . 
            . . . 7 7 7 a a 5 3 7 7 . . . . 
            . . . 6 7 7 7 a a 7 6 6 . . . . 
            . . . 6 6 7 7 7 7 7 6 . . . . . 
            . . . . 6 6 6 7 7 6 6 . . . . . 
            . . . . . . 6 7 6 6 . . . . . . 
            `, SpriteKind.flower)
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    }
}
