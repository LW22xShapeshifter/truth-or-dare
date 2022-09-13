input.onButtonPressed(Button.A, function () {
    TruthDare = randint(0, 1)
    if (TruthDare == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    PickPerson = randint(0, 7)
    if (PickPerson == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (PickPerson == 1) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (PickPerson == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (PickPerson == 3) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (PickPerson == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (PickPerson == 5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (PickPerson == 6) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 2)
    if (RandomNumber == 0) {
        basic.showString("-Unclear-")
    } else if (RandomNumber == 1) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
let RandomNumber = 0
let PickPerson = 0
let TruthDare = 0
basic.showString("8Ball!")
basic.pause(100)
basic.showString("Press A")
