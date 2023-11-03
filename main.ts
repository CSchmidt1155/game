namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const nut = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const brain = SpriteKind.create()
    export const plant2 = SpriteKind.create()
    export const plant3 = SpriteKind.create()
    export const plant4 = SpriteKind.create()
    export const plant5 = SpriteKind.create()
    export const plant6 = SpriteKind.create()
    export const sunzombie = SpriteKind.create()
    export const grasszombie = SpriteKind.create()
    export const wreckednut = SpriteKind.create()
    export const deadnut = SpriteKind.create()
    export const flower2 = SpriteKind.create()
    export const flower3 = SpriteKind.create()
    export const flower4 = SpriteKind.create()
    export const flower5 = SpriteKind.create()
    export const floweruu6 = SpriteKind.create()
    export const beastzombie = SpriteKind.create()
    export const royalzombie = SpriteKind.create()
    export const magiczombie = SpriteKind.create()
    export const stickzombie = SpriteKind.create()
    export const god = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.flower4, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow4)
})
sprites.onOverlap(SpriteKind.deadnut, SpriteKind.stickzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    sprites.destroyAllSpritesOfKind(SpriteKind.stickzombie)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.royalzombie, function (sprite, otherSprite) {
    sprites.destroy(king, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.plant4, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen4)
})
sprites.onOverlap(SpriteKind.plant2, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen2)
})
sprites.onOverlap(SpriteKind.magiczombie, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(wizard)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.plant3, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen3)
})
sprites.onOverlap(SpriteKind.plant6, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    placer.y += -10
})
sprites.onOverlap(SpriteKind.plant2, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen2)
})
info.onScore(11, function () {
    wall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower2, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow2)
})
sprites.onDestroyed(SpriteKind.grasszombie, function (sprite) {
    gladiator = sprites.create(assets.image`myImage7`, SpriteKind.beastzombie)
    gladiator.setVelocity(-20, 0)
    gladiator.setPosition(136, randint(40, 100))
    king = sprites.create(assets.image`myImage9`, SpriteKind.royalzombie)
    king.setVelocity(-16, 0)
    king.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.sunzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.god, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.plant4, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy_2.x += 20
    sprites.destroy(pea_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen4)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stickzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.stickzombie, effects.spray, 100)
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.grasszombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.grasszombie, function (sprite, otherSprite) {
    sprites.destroy(enemy_3, effects.spray, 500)
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.royalzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    king.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower3, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow3)
})
sprites.onOverlap(SpriteKind.flower4, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow4)
})
sprites.onOverlap(SpriteKind.floweruu6, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow6)
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower3, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow3)
})
sprites.onOverlap(SpriteKind.flower5, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.plant4, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_4, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen4)
})
sprites.onOverlap(SpriteKind.plant, SpriteKind.royalzombie, function (sprite, otherSprite) {
    sprites.destroy(peA, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    enemy_2.x += 20
    sprites.destroy(ball_green)
})
sprites.onOverlap(SpriteKind.plant3, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.beastzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.flower2, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow2)
})
sprites.onOverlap(SpriteKind.floweruu6, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow6)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    placer.x += -10
})
sprites.onOverlap(SpriteKind.plant5, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
})
info.onScore(60, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    wall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.brain, SpriteKind.grasszombie, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.UntilDone)
    game.showLongText("Game Over", DialogLayout.Center)
    sprites.destroyAllSpritesOfKind(SpriteKind.brain, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.plant5, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
})
sprites.onOverlap(SpriteKind.flower5, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow5)
})
info.onScore(30, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    wall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.floweruu6, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow6)
})
sprites.onOverlap(SpriteKind.floweruu6, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow6)
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.beastzombie, function (sprite, otherSprite) {
    sprites.destroy(gladiator)
})
sprites.onDestroyed(SpriteKind.stickzombie, function (sprite) {
    enemy1 = sprites.create(assets.image`myImage12`, SpriteKind.Enemy)
    enemy1.setVelocity(-13, 0)
    enemy1.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.flower3, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow3)
})
info.onScore(10, function () {
    s_flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.flower)
    s_flower.setPosition(40, 49)
    s_flower_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.flower2)
    s_flower_2.setPosition(40, 58)
    s_flower_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.flower3)
    s_flower_3.setPosition(40, 71)
    s_flower_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.flower4)
    s_flower_4.setPosition(40, 79)
    s_flower_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.flower5)
    s_flower_5.setPosition(40, 89)
    s_flower_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 3 3 3 5 . . . . . 
        . . . . 5 3 f 3 f 3 5 5 . . . . 
        . . . . 5 3 3 f 3 3 5 . . . . . 
        . . . 5 . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 7 5 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.floweruu6)
    s_flower_6.setPosition(40, 96)
})
sprites.onOverlap(SpriteKind.plant, SpriteKind.sunzombie, function (sprite, otherSprite) {
    sprites.destroy(peA, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    enemy_2.x += 20
    sprites.destroy(ball_green)
})
sprites.onOverlap(SpriteKind.flower4, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow4)
})
sprites.onOverlap(SpriteKind.deadnut, SpriteKind.sunzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
})
sprites.onOverlap(SpriteKind.beastzombie, SpriteKind.deadnut, function (sprite, otherSprite) {
    Stick = sprites.create(assets.image`myImage10`, SpriteKind.stickzombie)
    Stick.setVelocity(-25, 0)
    Stick.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.flower, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    placer.x += 10
})
sprites.onOverlap(SpriteKind.flower5, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow5)
})
sprites.onOverlap(SpriteKind.flower3, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow3)
})
sprites.onOverlap(SpriteKind.beastzombie, SpriteKind.nut, function (sprite, otherSprite) {
    Stick = sprites.create(assets.image`myImage10`, SpriteKind.stickzombie)
    Stick.setVelocity(-25, 0)
    Stick.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.sunzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.grasszombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_6.setPosition(51, 96)
})
info.onScore(80, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    wall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 1 1 1 1 1 3 . . . . . 
        . . . 3 1 8 f 1 1 8 f 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 1 1 1 1 1 1 3 . . . . 
        . . . 3 1 f 1 1 1 1 f 3 . . . . 
        . . . 3 1 1 f f f f 1 3 . . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow)
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.plant4, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_4, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen4)
})
sprites.onOverlap(SpriteKind.plant6, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen6)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.sunzombie, function (sprite, otherSprite) {
    sprites.destroy(enemy_2, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.plant2, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen2)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    placer.y += 10
})
sprites.onOverlap(SpriteKind.flower4, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_4, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow4)
})
info.onScore(3, function () {
    peA = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant)
    peA.setPosition(27, 49)
    pea_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant2)
    pea_2.setPosition(27, 58)
    pea_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant3)
    pea_3.setPosition(27, 71)
    pea_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant4)
    pea_4.setPosition(27, 79)
    pea_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant5)
    pea_5.setPosition(27, 89)
    pea_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . 7 a a a a a . 7 . . . . . 
        . . . 7 a a 8 f a 7 a 7 . . . . 
        . . . . 7 a a a a a a 7 . . . . 
        . . . . . a a a a 7 a 7 . . . . 
        . . . . . a a a a . 7 . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . 7 . . a a . . 7 . . . . . 
        . . 7 a 7 . a a . 7 a 7 . . . . 
        . . . 7 a 7 a a 7 a 7 . . . . . 
        . . . . 7 a a a a 7 . . . . . . 
        . . . . . . a a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant6)
    pea_6.setPosition(27, 96)
})
sprites.onOverlap(SpriteKind.nut, SpriteKind.stickzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroy(Stick)
    wall = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage3`, SpriteKind.wreckednut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower5, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow5)
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.stickzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    wall = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    sprites.destroyAllSpritesOfKind(SpriteKind.stickzombie)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.flower2, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow2)
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.royalzombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    king.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
    wall = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall.setPosition(51, 49)
    wall_2 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_2.setPosition(51, 58)
    wall_3 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_3.setPosition(51, 71)
    wall_4 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_4.setPosition(51, 79)
    wall_5 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_5.setPosition(51, 89)
    wall_6 = sprites.create(assets.image`myImage2`, SpriteKind.deadnut)
    wall_6.setPosition(51, 96)
})
sprites.onOverlap(SpriteKind.deadnut, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
})
sprites.onOverlap(SpriteKind.plant6, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen6)
})
sprites.onOverlap(SpriteKind.plant3, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen3)
})
sprites.onOverlap(SpriteKind.plant, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(peA, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    enemy_2.x += 20
    sprites.destroy(ball_green)
})
sprites.onOverlap(SpriteKind.plant, SpriteKind.grasszombie, function (sprite, otherSprite) {
    sprites.destroy(peA, effects.spray, 1000)
    enemy1.x += 20
    enemy_3.x += 20
    enemy_2.x += 20
    sprites.destroy(ball_green)
})
sprites.onOverlap(SpriteKind.plant6, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_6, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen6)
})
sprites.onOverlap(SpriteKind.plant5, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(sun)
    sun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    sun.setVelocity(50, 50)
    sun.setBounceOnWall(true)
    sun.setPosition(randint(10, 100), randint(10, 100))
})
sprites.onOverlap(SpriteKind.beastzombie, SpriteKind.wreckednut, function (sprite, otherSprite) {
    Stick = sprites.create(assets.image`myImage10`, SpriteKind.stickzombie)
    Stick.setVelocity(-25, 0)
    Stick.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.brain, SpriteKind.sunzombie, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.InBackground)
    game.showLongText("Game Over", DialogLayout.Center)
    sprites.destroyAllSpritesOfKind(SpriteKind.brain, effects.spray, 500)
    pause(100)
    game.reset()
})
sprites.onOverlap(SpriteKind.wreckednut, SpriteKind.beastzombie, function (sprite, otherSprite) {
    sprites.destroy(gladiator)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    enemy_2 = sprites.create(assets.image`myImage5`, SpriteKind.sunzombie)
    enemy_2.setVelocity(-13, 0)
    enemy_2.setPosition(136, randint(40, 100))
    enemy_3 = sprites.create(assets.image`myImage0`, SpriteKind.grasszombie)
    enemy_3.setVelocity(-13, 0)
    enemy_3.setPosition(136, randint(40, 100))
})
sprites.onOverlap(SpriteKind.plant2, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen2)
})
sprites.onOverlap(SpriteKind.plant5, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_5, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
})
sprites.onOverlap(SpriteKind.deadnut, SpriteKind.grasszombie, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.nut)
    sprites.destroyAllSpritesOfKind(SpriteKind.wreckednut)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadnut)
    enemy1.x += 40
    enemy_2.x += 40
    enemy_3.x += 40
})
sprites.onOverlap(SpriteKind.brain, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.InBackground)
    game.showLongText("Game Over", DialogLayout.Center)
    sprites.destroyAllSpritesOfKind(SpriteKind.brain, effects.spray, 500)
    pause(100)
    game.reset()
})
sprites.onOverlap(SpriteKind.flower2, SpriteKind.grasszombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower_2, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow2)
})
sprites.onOverlap(SpriteKind.deadnut, SpriteKind.beastzombie, function (sprite, otherSprite) {
    sprites.destroy(gladiator)
})
sprites.onOverlap(SpriteKind.flower, SpriteKind.sunzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow)
})
sprites.onOverlap(SpriteKind.brain, SpriteKind.royalzombie, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.InBackground)
    game.showLongText("Game Over", DialogLayout.Center)
    sprites.destroyAllSpritesOfKind(SpriteKind.brain, effects.spray, 500)
    pause(100)
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(enemy1, effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.flower, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(s_flower, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ball_yellow)
})
sprites.onDestroyed(SpriteKind.royalzombie, function (sprite) {
    wizard = sprites.create(assets.image`myImage4`, SpriteKind.magiczombie)
    wizard.setVelocity(-25, 0)
    wizard.setPosition(136, randint(40, 100))
    ball_yellow4.follow(wizard)
    ball_green.follow(wizard)
    ball_yellow.follow(wizard)
    ball_yellow2.follow(wizard)
    ball_yellow3.follow(wizard)
    ball_yellow5.follow(wizard)
    ball_yellow6.follow(wizard)
    ballgreen2.follow(wizard)
    ballgreen3.follow(wizard)
    ballgreen4.follow(wizard)
    ballgreen6.follow(wizard)
    ballgreen5.follow(wizard)
})
sprites.onOverlap(SpriteKind.plant3, SpriteKind.royalzombie, function (sprite, otherSprite) {
    enemy1.x += 20
    sprites.destroy(pea_3, effects.spray, 1000)
    enemy_2.x += 20
    enemy_3.x += 20
    sprites.destroy(ballgreen3)
})
let ballgreen5: Sprite = null
let ballgreen6: Sprite = null
let pea_6: Sprite = null
let ball_yellow: Sprite = null
let Stick: Sprite = null
let s_flower: Sprite = null
let ball_green: Sprite = null
let peA: Sprite = null
let ball_yellow5: Sprite = null
let s_flower_5: Sprite = null
let ball_yellow6: Sprite = null
let s_flower_6: Sprite = null
let ball_yellow3: Sprite = null
let s_flower_3: Sprite = null
let gladiator: Sprite = null
let ball_yellow2: Sprite = null
let s_flower_2: Sprite = null
let wall_6: Sprite = null
let wall_5: Sprite = null
let wall_4: Sprite = null
let wall_3: Sprite = null
let wall_2: Sprite = null
let wall: Sprite = null
let pea_5: Sprite = null
let ballgreen3: Sprite = null
let pea_3: Sprite = null
let wizard: Sprite = null
let ballgreen2: Sprite = null
let pea_2: Sprite = null
let ballgreen4: Sprite = null
let pea_4: Sprite = null
let king: Sprite = null
let ball_yellow4: Sprite = null
let enemy_3: Sprite = null
let enemy_2: Sprite = null
let s_flower_4: Sprite = null
let enemy1: Sprite = null
let sun: Sprite = null
let placer: Sprite = null
music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888999999999999999999999999999999999999999999999888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888999999999999999999999999999999999999999998888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888889999999999999999999999999999999999999988888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888899999999999999999999999999999999999988888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998888888888888889999999999999999999999999999999999988888888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999888888888888888888888998899999999999999999999888889988888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999888888888888888888888888889999999999999998888888888988888888888888888888888999999999999998888888999999999999999999999999999999999999999999999999999999999
    9999999888888888888888888888888888899999999999888888888888888888888888888888888888999999888888888888888999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888888888888889999999999888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888888888888899999999998888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888888888888889999999998888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888888888888889999999998888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888888888888889999999998888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999998888888888888888888888888888889999999988888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999
    9999999988888888888888888888888888899999999988888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999999999999
    9999999999888888888889888888888888899999999988888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999999999
    9999999999998888888889988888888889999999999998888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999889899999999999999999888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999998888888888899999888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999b999999999999999999b9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999b99999999999999999b999999999999999999b9999999999999999b99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbb99999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b99999999999999999999999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb9999999999999999b999999999999999999b9999999999999999b9999999999999999b9999999999999999b9999999999999b999999999999999999b9999999999999999b99999999
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaaaaaaab
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaaaaaaab
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaaaa7aaaaaaaaaa
    bb44444bbbbbbbb777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777aaaaaaaaaa7aaaa777aaaa
    b4bbbbb4bbbbbbb777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777aaaaaaaaa7aaaaa7aaaaaa
    b4bbbbb4bbbbbbb777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777aaaaaaaaa7aaaaaaaaaaaa
    b4bbbbb4bbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaa77aaaa7aaaaaa
    b4bbbbb4bbbbbbb6666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666aaaaaaaaaaaaaa7aa7aaa
    b4bbbbb4bbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaaaaaaaaa7aaa
    bb44444bbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaa7aaaaa7aaaa
    bbbb44bbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaa77aa7aaaa7aaaaa
    bbbb4b4bbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaa7aaa7aaaa7aaaaa
    bbb44bb4bbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaa7aaaaaaaaaaaaaaa
    bbb44bb4bbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaa7aaaaaaaaaa
    bb4b4bbb4bbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaa7aaaaaaaaaa
    b4bb4bbbb4bbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaa7aaaaaaaaaa
    b4bb4bbbbb4bbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666aaaaaaaaaaaa7aaaaaaaaaa
    4bbb4bbbbbb4bbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777aaaaaaaa7aaa7aaaaaaaaaa
    bbbb4bbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaa7aaa7a7aaaaaaaa
    bbbb4bbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaa7aaa7a7aaaa7aaa
    bbbb4bbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaa7aaa7aaaa77aaa
    bbbb4bbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaa7aaa7aaaa7aaaa
    bbb4b4bbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaa7a77aaa7aaaaa
    bbbb44bbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777aaaaaaaaa77aaa7aaaaaa
    bbbb4b4bbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaa77aaaaaaaaaaa
    bbb4bbb4bbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaa7aaaaaaaa
    bb4bbbbb4bbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaaaaaaaa
    bb4bbbbbb4bbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaa7aaaaaaaa
    b4bbbbbbbb4bbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaa7aaaaaaaa
    4bbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaa7aaaaaaa7
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaa7aaaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaa77aaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaa7aaaaaaaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaa7aaaaaaaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777aaaa7aaaaaaaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777aaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb66666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666aaaaaaaaaaaaaa7aaaaa
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaa7aaaaa
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaa7aaaaaa
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb77777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777aaaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766aaaa7aaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766aaa7aaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766aaa7aaaaaaaaaa7aaa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766aaa7aaa7aaaaaaa7aa
    bbbbbbbbbbbbbbb7777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766aaa7aaaa7aaaaaaaaa
    bbbbbbbbbbbbbbb777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776aaaaaaaaaa7aaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaaaaaaaaa7aaaaa7a
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667aaaa7aaaaaaaaaaaaaa
    bbbbbbbbbbbbbbb6666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677aaaa77aaaaaaaaaaaa
    bbbbbbbbbbbbbbb6666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677aaaaaa77aaaaaaaaaa
    bbbbbbbbbbbbbbb666667777777777666666666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777aaaaaa77aaaaaaaa
    bbbbbbbbbbbbbbb6666677777777776666666666777777777766666666667777777777666666666677777777776666666666777777777766666666667777777777666666666677aaaaaaaaaaaaaaaaaa
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaa
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaa
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaa
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaa
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaa
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaab
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
placer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    5 5 5 5 . . 5 5 5 5 . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    5 . . . . . . . . 5 . . . . . . 
    5 5 5 5 . . 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let peA_prime = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . 7 a a a a a . 7 . . . . . 
    . . . 7 a a 8 f a 7 a 7 . . . . 
    . . . . 7 a a a a a a 7 . . . . 
    . . . . . a a a a 7 a 7 . . . . 
    . . . . . a a a a . 7 . . . . . 
    . . . . . . a a . . . . . . . . 
    . . . 7 . . a a . . 7 . . . . . 
    . . 7 a 7 . a a . 7 a 7 . . . . 
    . . . 7 a 7 a a 7 a 7 . . . . . 
    . . . . 7 a a a a 7 . . . . . . 
    . . . . . . a a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.plant)
peA_prime.setPosition(50, 109)
let s_flower_prime = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 . . . . . 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . 5 5 3 3 3 3 3 5 . . . . . 
    . . . . 5 3 f 3 f 3 5 5 . . . . 
    . . . . 5 3 3 3 3 3 5 . . . . . 
    . . . . 5 3 f 3 f 3 5 5 . . . . 
    . . . . 5 3 3 f 3 3 5 . . . . . 
    . . . 5 . 5 5 5 5 5 . . . . . . 
    . . . . . . 5 7 5 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.god)
s_flower_prime.setPosition(30, 111)
let wall_prime = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 1 1 1 1 1 3 . . . . . 
    . . . 3 1 8 f 1 1 8 f 3 . . . . 
    . . . 3 1 1 1 1 1 1 1 3 . . . . 
    . . . 3 1 1 1 1 1 1 1 3 . . . . 
    . . . 3 1 f 1 1 1 1 f 3 . . . . 
    . . . 3 1 1 f f f f 1 3 . . . . 
    . . . . 3 1 1 1 1 1 1 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nut)
wall_prime.setPosition(10, 110)
sun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 5 5 5 3 . . . . . . 
    . . . . 3 5 5 3 5 5 3 . . . . . 
    . . . . 3 5 3 3 3 5 3 . . . . . 
    . . . . 3 5 5 3 5 5 3 . . . . . 
    . . . . . 3 5 5 5 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
sun.setVelocity(50, 50)
sun.setBounceOnWall(true)
placer.setPosition(98, 60)
let brain_1 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain_1.setPosition(16, 49)
let brain_2 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain_2.setPosition(16, 58)
let brain_3 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain_3.setPosition(16, 71)
let brain4 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain4.setPosition(16, 79)
let brain5 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain5.setPosition(16, 89)
let brain_6 = sprites.create(assets.image`myImage1`, SpriteKind.brain)
brain_6.setPosition(16, 96)
forever(function () {
    pause(5000)
    ball_yellow = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower, 20, 0)
    ball_yellow2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower_2, 20, 0)
    ball_yellow3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower_3, 20, 0)
    ball_yellow4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower_4, 20, 0)
    ball_yellow5 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower_5, 20, 0)
    ball_yellow6 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . 3 5 3 3 3 5 3 . . . . . 
        . . . . 3 5 5 3 5 5 3 . . . . . 
        . . . . . 3 5 5 5 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, s_flower_6, 20, 0)
})
forever(function () {
    pause(2000)
    ball_green = sprites.createProjectileFromSprite(assets.image`myImage`, peA, 20, 0)
    ballgreen2 = sprites.createProjectileFromSprite(assets.image`myImage`, pea_2, 20, 0)
    ballgreen3 = sprites.createProjectileFromSprite(assets.image`myImage`, pea_3, 20, 0)
    ballgreen4 = sprites.createProjectileFromSprite(assets.image`myImage`, pea_4, 20, 0)
    ballgreen5 = sprites.createProjectileFromSprite(assets.image`myImage`, pea_5, 20, 0)
    ballgreen6 = sprites.createProjectileFromSprite(assets.image`myImage`, pea_6, 20, 0)
})
forever(function () {
	
})
forever(function () {
	
})
game.onUpdateInterval(10000, function () {
    enemy1 = sprites.create(assets.image`myImage12`, SpriteKind.Enemy)
    enemy1.setVelocity(-13, 0)
    enemy1.setPosition(136, randint(40, 100))
})
