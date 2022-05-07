
document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'blueberries',
        img: 'images/blueberries.png'
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    },
    {
        name: 'kiwi',
        img: 'images/kiwi.png'
    },
    {
        name: 'mixedFruit',
        img: 'images/mixedFruit.png'
    },
    {
        name: 'oranges',
        img: 'images/oranges.png'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.png'
    },
    {
        name: 'blueberries',
        img: 'images/blueberries.png'
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    },
    {
        name: 'kiwi',
        img: 'images/kiwi.png'
    },
    {
        name: 'mixedFruit',
        img: 'images/mixedFruit.png'
    },
    {
        name: 'oranges',
        img: 'images/oranges.png'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.png'
    },
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

      else if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')

    }
    
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! Game Over!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
 }
  createBoard()
})