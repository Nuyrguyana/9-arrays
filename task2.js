
function getSumOfSequence(number) {
    const arrayNumbers = []
    for (let i = 0; i <= number; i++) {
        arrayNumbers.push(i)
    }
    return arrayNumbers[1] + arrayNumbers[number]
}

console.log(getSumOfSequence(5))