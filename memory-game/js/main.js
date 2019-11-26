var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png", 
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var flippedCardId = [];
var userScoreCount;

var checkForMatch = function () {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
		userScoreCount = userScoreCount + 1;
		var serUserScore = document.getElementById('user-score').textContent = "User Score - " + userScoreCount;
	}
	else {
		alert("Sorry, try again.");
	}
	for(let i = 0; i <= cardsInPlay.length; i += 1) {
		cardsInPlay.pop();
	}
};

function flipCard() {
	var cardID = this.getAttribute('data-id');
		flippedCardId[0] = cardID;
		this.setAttribute('src',cards[cardID].cardImage);
		cardsInPlay.push(cards[cardID].rank);
		if(cardsInPlay.length === 2) {
			checkForMatch();
		};

};	

var createBoard = function () {
	// create random number
	Math.random();

	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', "card");
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
	var setUserScore = document.getElementById('user-score').textContent = "User Score - 0";
	userScoreCount = 0;
};

var resetCards = function () {
	for(var i = 0; i < cards.length; i++) {
		document.querySelectorAll('.card')[i].setAttribute('src', 'images/back.png');
		cardsInPlay.pop();
	};
};

// add event listener to button
var assignResetBtn = function () {
	var btnListen = document.getElementById('reset');
	btnListen.addEventListener('click',resetCards);
};

createBoard();
assignResetBtn();



