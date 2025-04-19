@namespace
class SpriteKind:
    target = SpriteKind.create()
    walska = SpriteKind.create()
    eiqohg = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global down, up
    down = True
    extraEffects.create_spread_effect_on_anchor(mySprite20250313T031343369Z,
        extraEffects.create_single_color_spread_effect_data(11, ExtraEffectPresetShape.CLOUD),
        75,
        15,
        6)
    if hits <= 16:
        mySprite20250313T031343369Z.set_velocity(0, -10)
    elif hits >= 16:
        mySprite20250313T031343369Z.set_velocity(0, -52)
    up = False
sprites.on_overlap(SpriteKind.target, SpriteKind.eiqohg, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global up, down
    up = True
    extraEffects.create_spread_effect_on_anchor(mySprite20250313T031343369Z,
        extraEffects.create_single_color_spread_effect_data(11, ExtraEffectPresetShape.CLOUD),
        75,
        15,
        6)
    if hits <= 16:
        mySprite20250313T031343369Z.set_velocity(0, randint(9, 12))
    elif hits >= 16:
        mySprite20250313T031343369Z.set_velocity(0, 50)
    down = False
sprites.on_overlap(SpriteKind.target, SpriteKind.walska, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    global money, hits
    if coins == True:
        money += 8.6
    if gascan == True:
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(4, ExtraEffectPresetShape.CLOUD),
            651,
            175,
            8)
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(2, ExtraEffectPresetShape.EXPLOSION),
            273,
            125,
            4)
        pause(72.5)
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(1, ExtraEffectPresetShape.SPARK),
            339,
            87.5,
            11)
        pause(27.5)
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(5, ExtraEffectPresetShape.TWINKLE),
            285,
            110,
            9)
    else:
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(4, ExtraEffectPresetShape.CLOUD),
            313)
    hits += 1
    if Math.percent_chance(85.623455):
        extraEffects.create_spread_effect_on_anchor(mySprite3,
            extraEffects.create_single_color_spread_effect_data(5, ExtraEffectPresetShape.SPARK),
            525,
            155,
            3.5)
    pause(300)
    sprites.destroy(mySprite3)
    
    def on_background():
        global up
        if up == True:
            mySprite20250313T031343369Z.set_velocity(0, 85)
            pause(145)
            mySprite20250313T031343369Z.set_velocity(0, randint(9, 12))
            if hits >= 16:
                mySprite20250313T031343369Z.set_velocity(0, 52)
            else:
                mySprite20250313T031343369Z.set_velocity(0, randint(9, 12))
            pause(74)
            up = False
    timer.background(on_background)
    
    
    def on_background2():
        global down
        if down == True:
            mySprite20250313T031343369Z.set_velocity(0, -85)
            pause(145)
            if hits >= 16:
                mySprite20250313T031343369Z.set_velocity(0, -52)
            else:
                mySprite20250313T031343369Z.set_velocity(0, randint(-9, -12))
            pause(74)
            down = False
    timer.background(on_background2)
    
sprites.on_overlap(SpriteKind.projectile, SpriteKind.target, on_on_overlap3)

def on_combos_attach_combo():
    global auto_reload
    auto_reload = True
controller.combos.attach_combo("down,down,down,right,right,up,left", on_combos_attach_combo)

def on_combos_attach_combo2():
    global metal, gascan
    pause(25)
    metal = True
    if gascan == True:
        gascan = False
controller.combos.attach_combo("up,down,up,down,left,up", on_combos_attach_combo2)

def on_a_released():
    global fired, ammo, mySprite3
    if ammo > 0:
        if fireable == True:
            fired = True
            ammo += -1
            pause(100)
            for index in range(9):
                pause(30.2)
                transformSprites.change_rotation(gun, -2.05)
            extraEffects.create_spread_effect_at(extraEffects.create_single_color_spread_effect_data(4, ExtraEffectPresetShape.EXPLOSION),
                67,
                73,
                135.5)
            if gascan == True:
                mySprite3 = sprites.create(assets.image("""
                    gassss
                """), SpriteKind.projectile)
                scaling.scale_to_percent(mySprite3,
                    67.5,
                    ScaleDirection.UNIFORMLY,
                    ScaleAnchor.MIDDLE)
                
                def on_background3():
                    for index2 in range(22):
                        pause(74.5)
                        transformSprites.change_rotation(mySprite3, 9.22535)
                timer.background(on_background3)
                
            elif metal == True:
                mySprite3 = sprites.create(assets.image("""
                    steel
                """), SpriteKind.projectile)
                
                def on_background4():
                    for index3 in range(22):
                        pause(69)
                        transformSprites.change_rotation(mySprite3, 7.845)
                timer.background(on_background4)
                
            elif metal == False:
                mySprite3 = sprites.create(assets.image("""
                    myImage
                """), SpriteKind.projectile)
            mySprite3.set_position(67, 73)
            if hits >= 14:
                mySprite3.set_velocity(134, 0)
            else:
                mySprite3.set_velocity(50, 0)
            fired = False
            if ammo >= 8:
                
                def on_pause_until():
                    pass
                pause_until(on_pause_until)
                
                mySprite4.set_image(assets.image("""
                    myImage8
                """))
            elif ammo >= 7:
                
                def on_pause_until2():
                    pass
                pause_until(on_pause_until2)
                
                mySprite4.set_image(assets.image("""
                    myImage5
                """))
            elif ammo == 6:
                
                def on_pause_until3():
                    pass
                pause_until(on_pause_until3)
                
                mySprite4.set_image(assets.image("""
                    myImage6
                """))
            elif ammo == 5:
                
                def on_pause_until4():
                    pass
                pause_until(on_pause_until4)
                
                mySprite4.set_image(assets.image("""
                    myImage7
                """))
            elif ammo == 4:
                
                def on_pause_until5():
                    pass
                pause_until(on_pause_until5)
                
                mySprite4.set_image(assets.image("""
                    myImage0
                """))
            elif ammo == 3:
                
                def on_pause_until6():
                    pass
                pause_until(on_pause_until6)
                
                mySprite4.set_image(assets.image("""
                    myImage1
                """))
            elif auto_reload == True:
                fakeButtons.press_button(ControllerButton.B)
                pause(99)
                fakeButtons.release_button(ControllerButton.B)
            elif ammo == 2:
                
                def on_pause_until7():
                    pass
                pause_until(on_pause_until7)
                
                mySprite4.set_image(assets.image("""
                    myImage2
                """))
            elif ammo == 1:
                
                def on_pause_until8():
                    pass
                pause_until(on_pause_until8)
                
                mySprite4.set_image(assets.image("""
                    myImage3
                """))
            elif ammo == 0:
                mySprite4.set_image(assets.image("""
                    myImage4
                """))
            pause(100)
            if hits == 14:
                extraEffects.create_spread_effect_on_anchor(mySprite3,
                    extraEffects.create_single_color_spread_effect_data(12, ExtraEffectPresetShape.CLOUD),
                    3540,
                    5,
                    8)
            else:
                extraEffects.create_spread_effect_on_anchor(mySprite3,
                    extraEffects.create_single_color_spread_effect_data(12, ExtraEffectPresetShape.CLOUD),
                    3540,
                    4,
                    2)
            pause(998.5)
            for index4 in range(9):
                pause(34.99)
                transformSprites.change_rotation(gun, 2.05)
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_b_released():
    global coins, ammo, money
    if money <= 8.1:
        if Math.percent_chance(99.9):
            mySprite20250313T031343369Z.set_image(assets.image("""
                coin
            """))
            coins = True
        else:
            game.game_over(False)
    pause(110)
    ammo = 8
    if ammo <= 7:
        money += -4.03
    if money >= 8.4:
        mySprite20250313T031343369Z.set_image(assets.image("""
            target
        """))
    if coins == True:
        coins = False
controller.B.on_event(ControllerButtonEvent.RELEASED, on_b_released)

def on_combos_attach_combo3():
    global gascan, metal
    gascan = True
    pause(55)
    if metal == True:
        metal = False
controller.combos.attach_combo("right,right,right,left,right,left,right",
    on_combos_attach_combo3)

textSprite: TextSprite = None
fired = False
auto_reload = False
mySprite3: Sprite = None
gascan = False
coins = False
up = False
down = False
hits = 0
mySprite4: Sprite = None
ammo = 0
fireable = False
gun: Sprite = None
mySprite20250313T031343369Z: Sprite = None
money = 0
metal = False
metal = False
money = 75
mySprite20250313T031343369Z = sprites.create(assets.image("""
    target
"""), SpriteKind.target)
gun = sprites.create(assets.image("""
    gun
"""), SpriteKind.player)
scaling.scale_to_percent(gun, 27.2, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
gun.set_position(34, 78)
scaling.scale_to_percent(mySprite20250313T031343369Z,
    18,
    ScaleDirection.UNIFORMLY,
    ScaleAnchor.MIDDLE)
fireable = True
mySprite2 = sprites.create(assets.image("""
    wall things
"""), SpriteKind.walska)
rgrhio = sprites.create(assets.image("""
    wall things0
"""), SpriteKind.eiqohg)
mySprite20250313T031343369Z.set_position(137, 60)
scene.set_background_image(assets.image("""
    city
"""))
mySprite2.set_position(137, 48)
mySprite20250313T031343369Z.set_velocity(0, 10)
ammo = 8
rgrhio.set_position(137, 68)
mySprite4 = sprites.create(assets.image("""
    myImage8
"""), SpriteKind.player)
mySprite4.set_position(37, 34)
scaling.scale_to_percent(mySprite4,
    175.5,
    ScaleDirection.UNIFORMLY,
    ScaleAnchor.MIDDLE)
controller.combos.set_extended_combo_mode(True)
if hits >= 31:
    
    def on_pause_until9():
        pass
    pause_until(on_pause_until9)
    

def on_forever():
    global textSprite
    pause(155)
    if hits >= 2:
        pause(952)
        textSprite = textsprite.create(convert_to_text(hits), 13, 11)
        textSprite.set_position(34, 39)
        pause(1319)
        sprites.destroy(textSprite)
forever(on_forever)
