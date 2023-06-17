def on_overlap_tile(sprite, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_a_pressed():
    if hopes_and_pows.vy == 0:
        hopes_and_pows.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

hopes_and_pows: Sprite = None
scene.set_background_color(9)
hopes_and_pows = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(hopes_and_pows, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
hopes_and_pows.ay = 250
scene.camera_follow_sprite(hopes_and_pows)