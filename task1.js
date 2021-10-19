const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']
console.log(peopleWaiting)
let countOfPeopleLivedQueueWithOrder = 0

for (let i = 0; i < peopleWaiting.length; i++) {
    if (i <= peopleWaiting.indexOf('Кирилл')) {
        giveParcel(peopleWaiting[i])
    } else {
        leaveQueueWithoutParcel(peopleWaiting[i])
    }
}

function giveParcel(name) {
    countOfPeopleLivedQueueWithOrder++
    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length-countOfPeopleLivedQueueWithOrder} человек.`)

}

function leaveQueueWithoutParcel(name) {
    alert(`${name} не получил(а) посылку и ушел из очереди.`)
}