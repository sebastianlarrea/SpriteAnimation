const movementX = 130
const movementY = 150
const maxStepX = 5
const maxStepY = 3
let count
let stepX = 0
let stepY = 0
let colors = [
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#D81B60',
    '#C2185B',
    '#4A148C',
    '#EA80FC'
]

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
    sprite.style.backgroundColor = colors[count]
    count = count < 18 ? count + 1 : 0
}
setInterval(movementEffect, 50)
