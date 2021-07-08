const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let gameTime = 10;
let timeup = false;
let score = 0;

function randomTime(min, max) {
    return Math.random() * (max - min) + min;
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole) return randomHole(holes);
    lastHole = hole;
    return hole;
}

function popup() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeup) popup();
    }, time);
}

function startGame() {
    socre = 0;
    scoreBoard.textContent = 0;
    timeup = false;
    popup();
    setTimeout(() => timeup = true, gameTime * 1000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));