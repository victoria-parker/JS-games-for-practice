function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','images/green.svg')
        cards[optionTwoId].setAttribute('src', 'images/green.svg')
        alert('You have clicked the same image!')
    }
      else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/done.svg')
        cards[optionTwoId].setAttribute('src','images/done.svg')
        cards[optionOneId].removeEventListener('click', flipCard)
        card[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/green.svg')
      cards[optionTwoId].setAttribute('src', 'images/green.svg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }
