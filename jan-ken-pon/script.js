const gameChoicesArray = ['Paper', 'Scissors', 'Rock'];
const choiceEmojis = {
    'Paper': '📄',
    'Scissors': '✂️',
    'Rock': '🪨'
};

const rulesElement = document.querySelector('.container__rules');
const scoreNumberElement = document.querySelector('.header__scoreNumber');
const modalElement = document.querySelector('.modal');
const modalOverlayElement = document.querySelector('.modal__overlay');
const closeElement = document.querySelector('.modal__closeIcon');
const gameContentElement = document.querySelector('.gameContent');
const gameChoiceElements = document.querySelectorAll('.gameContent__gameChoice');
const gameChoiceImageElement = document.querySelector('.gameContent__gameChoiceImage');
const gameChoiceComputerElement = document.querySelector('.gameContent__gameChoice--isComputer');
const countdownTextElement = document.querySelector('.gameContent__countdownText');
const resultButtonElement = document.querySelector('.gameContent__resultButton');
const resultTextElement = document.querySelector('.gameContent__resultText');

let countdown = 4;
let randomResult;

const rulesModalEvent = () => modalElement.classList.toggle('modal--isActive');
const getRandomNumber = () => Math.floor(Math.random() * 3);

const showResult = (userChoice, computerChoice) => {
    const score = parseInt(scoreNumberElement.textContent);

    if (userChoice === computerChoice) {
        resultTextElement.textContent = 'Draw';
    } else if (
        (userChoice === gameChoicesArray[0] && computerChoice === gameChoicesArray[1]) ||
        (userChoice === gameChoicesArray[1] && computerChoice === gameChoicesArray[2]) ||
        (userChoice === gameChoicesArray[2] && computerChoice === gameChoicesArray[0])
    ) {
        resultTextElement.textContent = 'You lose';
        gameContentElement.classList.add('gameContent--isLost');

        if (score > 0) {
            scoreNumberElement.textContent = score - 1;
        }
    } else {
        resultTextElement.textContent = 'You win';
        scoreNumberElement.textContent = score + 1;
    }
};

const startCountdown = () => {
    countdownTextElement.textContent = countdown - 1;
    countdown -= 1;

    if (countdown) {
        setTimeout(() => startCountdown(), 600);
    } else {
        const selectedGameChoiceElement = document.querySelector('.gameContent__gameChoice--isActive');
        const selectedChoice = selectedGameChoiceElement.dataset.choice;
        randomResult = gameChoicesArray[getRandomNumber()];

        showResult(selectedChoice, randomResult);
        setTimeout(() => gameContentElement.classList.add(`gameContent--revealResult`), 500);

        countdownTextElement.textContent = '';
        gameChoiceComputerElement.classList.add(`gameContent__gameChoice--is${randomResult}`);
        gameChoiceImageElement.textContent = choiceEmojis[randomResult];
        countdown = 4;
    }
};

const gameChoiceEvent = (event) => {
    gameContentElement.classList.add('gameContent--isActive');
    event.target.classList.add('gameContent__gameChoice--isActive');
    startCountdown();
};

const playAgainEvent = () => {
    const activeChoiceElement = document.querySelector('.gameContent__gameChoice--isActive');

    gameContentElement.classList.remove(`gameContent--revealResult`);
    gameChoiceComputerElement.classList.remove(`gameContent__gameChoice--is${randomResult}`);
    gameChoiceImageElement.textContent = '';
    gameContentElement.classList.remove('gameContent--isActive', 'gameContent--isLost');
    activeChoiceElement.classList.remove('gameContent__gameChoice--isActive');
};

rulesElement.addEventListener('click', rulesModalEvent);
closeElement.addEventListener('click', rulesModalEvent);
modalOverlayElement.addEventListener('click', rulesModalEvent);
gameChoiceElements.forEach(item => item.addEventListener('click', gameChoiceEvent));
resultButtonElement.addEventListener('click', playAgainEvent);