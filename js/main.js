'use strict'

function onBallClick(elBall) {
    var newSize = +elBall.innerText + 50

    if (newSize > 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerText = 100
    } else {
        elBall.style.width = newSize + 'px'
        elBall.style.height = newSize + 'px'
        elBall.innerText = newSize
    }
}
