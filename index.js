function writeCards(cards,event) {
    const newCards = []
    for (let i = 0; i < cards.length; i++) {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return newCards
}

function countDown(x) {
    let counter = x
    while (counter >= 0) {
        console.log(counter--);
    }
}