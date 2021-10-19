const coffees = ['Latte', 'Cappuccino', 'Americano']
const coffeeName = prompt('Поиск кофе по названию')
const coffeeSelection = coffees.findIndex((coffee) => {
    return coffee.toLowerCase() === coffeeName.toLowerCase()
})
if (coffeeSelection > -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeSelection]}. Он ${coffeeSelection + 1}-й по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии.')
}

const prices = [1.5, 1, 2]
const updatedPrices = prices.map((price) => {
    return price + 0.5
})

alert(`Кофе ${coffees[coffeeSelection]} сейчас стоит ${updatedPrices[coffeeSelection]} евро`)

const clientsEstimations = []
for (let i = 0; i < 5; i++) {
    let askClientToGiveEstimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
    if ((askClientToGiveEstimation >= 1) && (askClientToGiveEstimation <= 10)) {
        clientsEstimations.push(askClientToGiveEstimation)
    }
    console.log(clientsEstimations)
}

const goodEstimations = clientsEstimations.filter((estimation) => {
    return estimation > 5
})

const notGoodEstimations = clientsEstimations.filter((estimation) => {
    return estimation < 5
})
alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)
