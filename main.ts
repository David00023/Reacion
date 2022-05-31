let game_started = false
let time = 0
let score_a = 0
let score_b = 0
let show_time = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.pause(randint(3000, 6000))
    game_started = true
    time = input.runningTime()
})
input.onPinPressed(TouchPin.P2, function () {
    if (game_started == false) {
        basic.showIcon(IconNames.No)
        game_started = false
        basic.pause(1000)
    }
    basic.showString("A")
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    score_a = 0
    score_b = 0
})
input.onPinPressed(TouchPin.P1, function () {
    if (game_started == false) {
        basic.showIcon(IconNames.No)
        game_started = false
        basic.pause(1000)
    }
    basic.showString("B")
    basic.pause(1000)
})
basic.forever(function () {
    if (game_started == true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
    }
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
            score_a += 1
            basic.showNumber(score_a)
            basic.pause(500)
            show_time = time - input.runningTime()
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                game_started = false
                score_b += score_b
                basic.showNumber(0)
                basic.pause(500)
                show_time = time - input.runningTime()
            }
        }
    }
    if (score_a == 3) {
        basic.showString("A wins ")
        basic.pause(500)
        basic.showString("Game over")
    }
    if (score_b == 3) {
        basic.showString("B wins ")
        basic.pause(500)
        basic.showString("Game over")
    }
    basic.pause(1000)
    basic.clearScreen()
})
