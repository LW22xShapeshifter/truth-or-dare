input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 2)
    if (RandomNumber == 0) {
        basic.showString("-Unclear-")
    } else if (RandomNumber == 1) {
        basic.showString("no")
    } else {
        basic.showString("yes")
    }
})
let RandomNumber = 0
basic.showString("8BALL! SHAKE")
basic.forever(function () {
	
})
