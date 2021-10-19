const numbers = [10, 4, 100, -5, 54, 2]

// 1. for
 /*
let cubesSum = 0
for (let i = 0; i < numbers.length; i++) {
    cubesSum += Math.pow(numbers[i], 3)
}
console.log(cubesSum)
*/

// 2. for of

/*
let  cubesSum = 0
for (const num of numbers) {
    cubesSum += Math.pow(num, 3)
}
console.log(cubesSum)
*/

// 3. forEach

/*
let cubesSum = 0
numbers.forEach((num) => {
    cubesSum += Math.pow(num, 3) // cubeSum = cubeSum + Math....
})
console.log(cubesSum)
*/

// 4. reduce

/*
const cubesSum = numbers.reduce((acc, num) => {
    return acc + Math.pow(num, 3)
}, 0)
console.log(cubesSum)
*/