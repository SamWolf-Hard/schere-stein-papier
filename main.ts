let L = 0
let w = 0
let handNummer = 0
input.onButtonPressed(Button.A, function () {
    L += 1
})
input.onButtonPressed(Button.B, function () {
    w += 1
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        handNummer = randint(1, 3)
        if (handNummer == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
            music.play(music.stringPlayable("F E F E F E F E ", 120), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (handNummer == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
            music.play(music.stringPlayable("A G A G A G A G ", 120), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (handNummer == 3) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 122), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
    if (L == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 67), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.clearScreen()
        w = 0
        L = 0
    }
    if (w == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C D E F G A B C5 ", 247), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.clearScreen()
        w = 0
        L = 0
    }
})
