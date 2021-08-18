
document.addEventListener('DOMContentLoaded', ()=>{

    // Card Option

    const cardArray = [
        {
            name : 'fries',
            img  : '/Image/fries.png' },
        {
            name : 'fries',
            img  : '/Image/fries.png'   },
        {
            name : 'cheeseburger',
            img  : '/Image/cheeseburger.png'    },
        {
            name : 'cheeseburger',
            img  : '/Image/cheeseburger.png'    },
        {
            name : 'hotdog',
            img  : '/Image/hotdog.png'  },
        {
            name : 'hotdog',
            img  : '/Image/hotdog.png'  },
        {
            name : 'ice-cream',
            img  : '/Image/ice-cream.png'   },
        {
            name : 'ice-cream',
            img  : '/Image/ice-cream.png'   },
        {
            name : 'milkshake',
            img  : '/Image/milkshake.png'   },
        {
            name : 'milkshake',
            img  : '/Image/milkshake.png'   },
        {
            name : 'pizza',
            img  : '/Image/pizza.png'   },
        {
            name : 'pizza',
            img  : '/Image/pizza.png'   }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    let result = document.getElementById("result");
    var cardChoosen = [];
    var cardChoosenId = [];
    var cardWon = [];

    // create board
    function createBoard() {
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', '/Image/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }

    // check for maches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');

        var oneImg = cardChoosenId[0];
        var twoImg = cardChoosenId[1];

        if(cardChoosen[0] === cardChoosen[1]){
            alert("You found a match");
            cards[oneImg].setAttribute('src', '/Image/white.png');
            cards[twoImg].setAttribute('src', '/Image/white.png');
            cardWon.push(cardChoosen);
        }
        else{
            cards[oneImg].setAttribute('src', '/Image/blank.png');
            cards[twoImg].setAttribute('src', '/Image/blank.png');
            alert("Sorry Try Again");
        }

        cardChoosen = [];
        cardChoosenId = [];

        result.innerHTML = cardWon.length;

        if(cardWon.length == cardArray.length/2){
            alert("Congratulation! You Get All Match");
        }
    }
    
    // flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name);
        cardChoosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);

        if(cardChoosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }


    createBoard();
})