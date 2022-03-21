const movementX = 130
const movementY = 150
const maxStepX = 5
const maxStepY = 3
let stepX = 1
let stepY = 0

const movementEffect = () => {
    const sprite = document.querySelector('.sprite-animation')
    const x = stepX * movementX
    const y = stepY * movementY
    if (stepX > maxStepX) {
        stepX = 0
        stepY++
    } else if (stepY > maxStepY - 1 && stepX === maxStepX) {
        stepX = 0
        stepY = 0
    } else {
        stepX++
    }
    sprite.style.backgroundPosition = `-${x}px -${y}px`
}
setInterval(movementEffect, 50)
