input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() > 90) {
        music.playMelody("E F E F G F E D ", 120)
    } else {
        music.playMelody("A B A B C5 B C5 D ", 120)
    }
})
basic.forever(function () {
	
})
