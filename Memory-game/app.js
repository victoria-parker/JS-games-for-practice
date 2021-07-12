document.addEventListener('DOMContentLoaded',()=>{

    //Card options
    const cardArray=[
        {
            name:'dog',
            img: 'images/dog.svg'
        },
        {
            name:'dog',
            img: 'images/dog.svg'
        },
        {
            name:'elephant',
            img: 'images/elephant.svg'
        },
        {
            name:'elephant',
            img: 'images/elephant.svg'
        },
        {
            name:'giraffe',
            img: 'images/giraffe.svg'
        },
        {
            name:'giraffe',
            img: 'images/giraffe.svg'
        },
        {
            name:'lion',
            img: 'images/lion.svg'
        },
        {
            name:'lion',
            img: 'images/lion.svg'
        },
        {
            name:'monkey',
            img: 'images/monkey.svg'
        },
        {
            name:'monkey',
            img: 'images/monkey.svg'
        },
        {
            name:'wolf',
            img: 'images/wolf.svg'
        },
        {
            name:'wolf',
            img: 'images/wolf.svg'
        }

    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen= []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard(){
        for (let i=0; i < cardArray.length; i++){
            var card=document.createElement('img')
            card.setAttribute('src','images/green.svg')
            card.setAttribute('data-id',i)
           card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/green.svg')
          cards[optionTwoId].setAttribute('src', 'images/green.svg')
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match!')
          cards[optionOneId].setAttribute('src', 'images/done.svg')
          cards[optionTwoId].setAttribute('src', 'images/done.svg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'images/green.svg')
          cards[optionTwoId].setAttribute('src', 'images/green.svg')
          alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congratulations! You found them all!'
        }
      }
    
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 500)
        }
      }
    

    createBoard()
})