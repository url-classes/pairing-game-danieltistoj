document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name: 'acdc',
            img: 'img/acdc.png'
        },
        {
            name: 'amygdala',
            img: 'img/amygdala.PNG'
        },
        {
            name: 'darkthrone',
            img: 'img/darkthrone.PNG'
        },
        {
            name: 'deftones',
            img: 'img/deftones.jpg'
        },
        {
            name: 'disentomb',
            img: 'img/disentomb.jpg'
        },
        {
            name: 'blacksabbath',
            img: 'img/blacksabbath.png'
        },
        {
            name: 'acdc',
            img: 'img/acdc.png'
        },
        {
            name: 'amygdala',
            img: 'img/amygdala.PNG'
        },
        {
            name: 'darkthrone',
            img: 'img/darkthrone.PNG'
        },
        {
            name: 'deftones',
            img: 'img/deftones.jpg'
        },
        {
            name: 'disentomb',
            img: 'img/disentomb.jpg'
        },
        {
            name: 'blacksabbath',
            img: 'img/blacksabbath.png'
        },

    ]

    cardArray.sort(()=>0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    var cardsChosen =[]
    var cardsChosenId =[]
    const cardsWon = []
    const resultDisplay= document.querySelector('#score')
    resultDisplay.textContent = "0"

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src','img/atras2.PNG')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    //comparar tarjetas
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src','img/atras2.PNG')
            cards[optionTwoId].setAttribute('src','img/atras2.PNG')
            alert('Le estas dando click a la misma carta')
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('Se encontro el par')
            cards[optionOneId].setAttribute('src','img/atras3.PNG')
            cards[optionTwoId].setAttribute('src','img/atras3.PNG')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','img/atras2.PNG')
            cards[optionTwoId].setAttribute('src','img/atras2.PNG')
            alert('intenta de nuevo')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent = cardsWon.length 
    
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Felicidades encontro todos los pares"
        }
    }
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
    
})

function Refresh(){
   location.reload()
}
/*
const btnRefresh = document.getElementById('#refresh')

btnRefresh.onclick = function() {
    console.log("entro")
}
*/