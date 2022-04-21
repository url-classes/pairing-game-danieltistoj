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
            name: 'emperor',
            img: 'img/emperor.jpg'
        },
        {
            name: 'mayhem',
            img: 'img/mayhem.jpg'
        },
        {
            name: 'mgla',
            img: 'img/mgla.png'
        },
        {
            name: 'whiteward',
            img: 'img/whiteward.png'
        },
        {
            name: 'blacksabbath',
            img: 'img/blacksabbath.png'
        },

    ]
    
    const grid = document.querySelector('.grid')
    var cardsChosen =[]
    var cardsChosenId =[]

    
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src','img/atras2.PNG')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
    }
    createBoard()
    
})