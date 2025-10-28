'use strict'

function onBallClick(elBall) {
    var newSize = parseInt(getComputedStyle(elBall).width) + 50
    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'
    elBall.innerText = newSize
}
