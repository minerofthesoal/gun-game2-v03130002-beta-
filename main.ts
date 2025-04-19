namespace SpriteKind {
    export const target = SpriteKind.create()
    export const walska = SpriteKind.create()
    export const eiqohg = SpriteKind.create()
}
namespace StatusBarKind {
    export const time = StatusBarKind.create()
}
function reload () {
    if (money <= 4.8) {
        if (Math.percentChance(99.9)) {
            coins = true
            mySprite20250313T031343369Z.setImage(assets.image`coin`)
        } else {
            game.gameOver(false)
        }
    }
    pause(110)
    ammo = 8
    if (ammo <= 7) {
        money += -4.03
    }
    if (money >= 8.4) {
        mySprite20250313T031343369Z.setImage(assets.image`target`)
    }
    if (coins == true) {
        coins = false
    }
    if (ammo >= 8) {
        mySprite4.setImage(assets.image`myImage8`)
    } else if (ammo >= 7) {
        pauseUntil(() => ammo == 7)
        mySprite4.setImage(assets.image`myImage5`)
    } else if (ammo == 6) {
        pauseUntil(() => ammo == 6)
        mySprite4.setImage(assets.image`myImage6`)
    } else if (ammo == 5) {
        pauseUntil(() => ammo == 5)
        mySprite4.setImage(assets.image`myImage7`)
    } else if (ammo == 4) {
        pauseUntil(() => ammo == 4)
        mySprite4.setImage(assets.image`myImage0`)
    } else if (ammo == 3) {
        pauseUntil(() => ammo == 3)
        mySprite4.setImage(assets.image`myImage1`)
    } else if (auto_reload == true) {
        fakeButtons.pressButton(ControllerButton.B)
        pause(108.5)
        fakeButtons.releaseButton(ControllerButton.B)
    } else if (ammo == 2) {
        pauseUntil(() => ammo == 2)
        mySprite4.setImage(assets.image`myImage2`)
    } else if (ammo == 1) {
        pauseUntil(() => ammo == 1)
        mySprite4.setImage(assets.image`myImage3`)
    }
}
sprites.onOverlap(SpriteKind.target, SpriteKind.eiqohg, function (sprite, otherSprite) {
    down = true
    extraEffects.createSpreadEffectOnAnchor(mySprite20250313T031343369Z, extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Cloud), 75, 15, 6)
    if (hits <= 16) {
        mySprite20250313T031343369Z.setVelocity(0, -10)
    } else if (hits >= 16) {
        mySprite20250313T031343369Z.setVelocity(0, -52)
    }
    up = false
})
sprites.onOverlap(SpriteKind.target, SpriteKind.walska, function (sprite, otherSprite) {
    up = true
    extraEffects.createSpreadEffectOnAnchor(mySprite20250313T031343369Z, extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Cloud), 75, 15, 6)
    if (hits <= 16) {
        mySprite20250313T031343369Z.setVelocity(0, randint(9, 12))
    } else if (hits >= 16) {
        mySprite20250313T031343369Z.setVelocity(0, 53)
    }
    down = false
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.target, function (sprite, otherSprite) {
    if (coins == true) {
        money += randint(4.5, 8.68)
    }
    if (gascan == true) {
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Cloud), 651, 175, 8)
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 273, 125, 4)
        pause(72.5)
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 339, 87.5, 11)
        pause(14.995)
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Twinkle), 187.5, 79, 14)
        pause(27.5)
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Twinkle), 285, 110, 9)
    } else {
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Cloud), 313)
    }
    hits += 1
    if (Math.percentChance(85.623455)) {
        extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 525, 155, 3.5)
    }
    pause(300)
    sprites.destroy(mySprite3)
    timer.background(function () {
        if (up == true) {
            mySprite20250313T031343369Z.setVelocity(0, 85)
            pause(145)
            mySprite20250313T031343369Z.setVelocity(0, randint(9, 12))
            if (hits >= 16) {
                mySprite20250313T031343369Z.setVelocity(0, 52)
            } else {
                mySprite20250313T031343369Z.setVelocity(0, randint(9, 12))
            }
            pause(74)
            up = false
        }
    })
    timer.background(function () {
        if (down == true) {
            mySprite20250313T031343369Z.setVelocity(0, -85)
            pause(145)
            if (hits >= 16) {
                mySprite20250313T031343369Z.setVelocity(0, -52)
            } else {
                mySprite20250313T031343369Z.setVelocity(0, randint(-9, -12))
            }
            pause(74)
            down = false
        }
    })
})
controller.combos.attachCombo("down,down,down,right,right,up,left", function () {
    auto_reload = true
})
controller.combos.attachCombo("up,down,up,down,left,up", function () {
    pause(25)
    metal = true
    if (gascan == true) {
        gascan = false
    }
})
statusbars.onStatusReached(StatusBarKind.time, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    multilights.toggleLighting(true)
    multilights.addLightSource(mySprite20250313T031343369Z, 9)
    lig = true
    multilights.addLightSource(mySprite20250320T234148924Z)
    multilights.addFlashLightSource(
    mySprite20250320T234148924Z,
    0,
    70,
    30
    )
    lantern.setBreathingEnabled(true)
    lantern.startLanternEffect(mySprite20250320T234148924Z)
    multilights.bandWidthOf(mySprite20250320T234148924Z, 7)
    lantern.setLightBandWidth(3.75)
    timer.background(function () {
        timer.after(1175, function () {
            lantern.stopLanternEffect()
        })
    })
})
statusbars.onZero(StatusBarKind.time, function (status) {
    pause(100)
    lig = false
    multilights.toggleLighting(false)
    statusbar.value = 200
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (ammo > 0) {
        if (fireable == true) {
            fired = true
            ammo += -1
            pause(100)
            for (let index = 0; index < 9; index++) {
                pause(30.2)
                transformSprites.changeRotation(gun, -2.05)
            }
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Explosion), 67, 73, 135.5)
            if (gascan == true) {
                mySprite3 = sprites.create(assets.image`gassss`, SpriteKind.Projectile)
                scaling.scaleToPercent(mySprite3, 67.5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                timer.background(function () {
                    for (let index = 0; index < 22; index++) {
                        pause(74.5)
                        transformSprites.changeRotation(mySprite3, 9.22535)
                    }
                })
            } else if (metal == true) {
                mySprite3 = sprites.create(assets.image`steel`, SpriteKind.Projectile)
                timer.background(function () {
                    for (let index = 0; index < 22; index++) {
                        pause(69)
                        transformSprites.changeRotation(mySprite3, 7.845)
                    }
                })
            } else if (metal == false) {
                mySprite3 = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
            }
            mySprite3.setPosition(67, 73)
            if (hits >= 14) {
                mySprite3.setVelocity(134, 0)
            } else {
                mySprite3.setVelocity(50, 0)
            }
            lantern.startLanternEffect(mySprite3)
            multilights.addLightSource(mySprite3, 4.25)
            fired = false
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
            if (ammo >= 8) {
                mySprite4.setImage(assets.image`myImage8`)
            } else if (ammo >= 7) {
                pauseUntil(() => ammo == 7)
                mySprite4.setImage(assets.image`myImage5`)
            } else if (ammo == 6) {
                pauseUntil(() => ammo == 6)
                mySprite4.setImage(assets.image`myImage6`)
            } else if (ammo == 5) {
                pauseUntil(() => ammo == 5)
                mySprite4.setImage(assets.image`myImage7`)
            } else if (ammo == 4) {
                pauseUntil(() => ammo == 4)
                mySprite4.setImage(assets.image`myImage0`)
            } else if (ammo == 3) {
                pauseUntil(() => ammo == 3)
                mySprite4.setImage(assets.image`myImage1`)
            } else if (auto_reload == true) {
                fakeButtons.pressButton(ControllerButton.B)
                pause(108.5)
                fakeButtons.releaseButton(ControllerButton.B)
            } else if (ammo == 2) {
                pauseUntil(() => ammo == 2)
                mySprite4.setImage(assets.image`myImage2`)
            } else if (ammo == 1) {
                pauseUntil(() => ammo == 1)
                mySprite4.setImage(assets.image`myImage3`)
            }
            pause(100)
            if (hits == 14) {
                extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Cloud), 3540, 5, 8)
            } else {
                extraEffects.createSpreadEffectOnAnchor(mySprite3, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Cloud), 3540, 4, 2)
            }
            pause(998.5)
            for (let index = 0; index < 9; index++) {
                pause(34.99)
                transformSprites.changeRotation(gun, 2.05)
            }
            lantern.stopLanternEffect()
            pause(725)
            multilights.removeLightSource(mySprite3)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    reload()
})
controller.combos.attachCombo("right,right,right,left,right,left,right", function () {
    gascan = true
    pause(55)
    if (metal == true) {
        metal = false
    }
})
let textSprite: TextSprite = null
let fired = false
let lig = false
let mySprite3: Sprite = null
let gascan = false
let up = false
let hits = 0
let down = false
let auto_reload = false
let coins = false
let metal = false
let statusbar: StatusBarSprite = null
let money = 0
let mySprite4: Sprite = null
let ammo = 0
let fireable = false
let mySprite20250320T234148924Z: Sprite = null
let gun: Sprite = null
let mySprite20250313T031343369Z: Sprite = null
mySprite20250313T031343369Z = sprites.create(assets.image`target`, SpriteKind.target)
gun = sprites.create(assets.image`gun`, SpriteKind.Player)
scaling.scaleToPercent(gun, 27.2, ScaleDirection.Uniformly, ScaleAnchor.Middle)
gun.setPosition(34, 78)
scaling.scaleToPercent(mySprite20250313T031343369Z, 18, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite20250320T234148924Z = sprites.create(assets.image`o lights`, SpriteKind.Player)
fireable = true
let mySprite2 = sprites.create(assets.image`wall things`, SpriteKind.walska)
let rgrhio = sprites.create(assets.image`wall things0`, SpriteKind.eiqohg)
mySprite20250313T031343369Z.setPosition(137, 60)
scene.setBackgroundImage(assets.image`city`)
mySprite2.setPosition(137, 48)
mySprite20250313T031343369Z.setVelocity(0, 10)
rgrhio.setPosition(137, 68)
controller.combos.setTimeout(3595.75)
ammo = 8
mySprite4 = sprites.create(assets.image`myImage8`, SpriteKind.Player)
mySprite4.setPosition(37, 34)
scaling.scaleToPercent(mySprite4, 175.5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
controller.combos.setExtendedComboMode(true)
money = 75
statusbar = statusbars.create(24, 13, StatusBarKind.time)
statusbar.max = 200
statusbar.value = 200
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setPosition(81, 104)
statusbar.setColor(5, 8, 6)
multilights.toggleLighting(false)
scaling.scaleToPercent(mySprite20250320T234148924Z, 37.825, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite20250320T234148924Z.setPosition(43, 54)
metal = false
forever(function () {
    pause(155)
    if (hits >= 2) {
        pause(952)
        textSprite = textsprite.create(convertToText(hits), 13, 11)
        textSprite.setPosition(34, 39)
        pause(1319)
        sprites.destroy(textSprite)
    }
})
forever(function () {
    pause(115)
    statusbar.value += -0.2785
})
