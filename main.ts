info.onScore(50, function () {
    game.setGameOverMessage(true, "yay!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    LIMITED += -1
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e . . . . . . . . . . . . 
    . . e d e . . . . . . . . . . . 
    . e f d f e . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . . d d d . . . . . . . . . . . 
    . . 8 d . . . . . . . . . . . . 
    . 8 8 8 8 . . . . . . . . . . . 
    . 8 8 8 8 . . . . . . . . . . . 
    4 8 8 8 8 4 4 4 . . . . . . . . 
    . 8 8 8 8 . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . . 8 f . . . . . . . . . . . . 
    . . f f . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
let LIMITED = 0
game.onUpdateInterval(500, function () {
    if (LIMITED < 10) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . . . . . . . 
            . . . e e e e . . . . . . . . . 
            . . . . 5 5 . . . . . . . . . . 
            . . . 5 4 4 5 . . . . . . . . . 
            . . . 5 4 4 5 . . . . . . . . . 
            . . . 5 4 4 5 . . . . . . . . . 
            . . 5 4 8 8 4 5 . . . . . . . . 
            f f 4 4 8 8 4 4 f f . . . . . . 
            f f 4 8 8 8 8 4 f f . . . . . . 
            `, SpriteKind.Food)
        LIMITED += 1
        mySprite2.setPosition(randint(0, 160), randint(4, 130))
    }
})
