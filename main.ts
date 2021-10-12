let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += 1
    if (x == 5) {
        x = 0
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    y += 1
    if (y == 5) {
        y = 0
    }
    led.plot(x, y)
})
basic.forever(function () {
    if (x == 2 && y == 2) {
        led.toggle(x, y)
        basic.pause(100)
    } else if (x == 0 || y == 4) {
        led.toggle(x, y)
        basic.pause(100)
    }
})
