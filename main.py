game_started = False
time = 0
score_a = 0
score_b = 0
show_time = 0

def on_button_pressed_a():
    global game_started, time
    basic.pause(randint(3000, 6000))
    game_started = True
    time = input.running_time()
    if game_started == True:
        basic.show_icon(IconNames.HEART)
        basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global game_started
    if game_started == False:
        basic.show_icon(IconNames.NO)
        game_started = False
        basic.pause(1000)
    basic.show_string("A")
    basic.pause(1000)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_ab():
    global score_a, score_b
    score_a = 0
    score_b = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_pin_pressed_p1():
    global game_started
    if game_started == False:
        basic.show_icon(IconNames.NO)
        game_started = False
        basic.pause(1000)
    basic.show_string("B")
    basic.pause(1000)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_forever():
    global game_started, score_a, show_time, score_b
    while game_started:
        if input.pin_is_pressed(TouchPin.P1):
            basic.show_string("A")
            game_started = False
            score_a += 1
            basic.show_number(score_a)
            basic.pause(500)
            show_time = time - input.running_time()
        else:
            if input.pin_is_pressed(TouchPin.P2):
                basic.show_string("B")
                game_started = False
                score_b += score_b
                basic.show_number(0)
                basic.pause(500)
                show_time = time - input.running_time()
    if score_a == 3:
        basic.show_string("A wins ")
        basic.pause(500)
        basic.show_string("Game over")
    if score_b == 3:
        basic.show_string("B wins ")
        basic.pause(500)
        basic.show_string("Game over")
    basic.pause(1000)
    basic.clear_screen()
basic.forever(on_forever)
