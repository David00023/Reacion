let game_started = false
basic.forever(function () {
    game_started = true
    basic.pause(randint(2000, 6000))
    basic.showIcon(IconNames.Heart)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                game_started = false
            }
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
