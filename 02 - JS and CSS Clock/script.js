const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minsDegrees = (mins / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
    else secondHand.style.transition = 'all .05s';
    if (minsDegrees === 90) minHand.style.transition = 'all 0s';
    else minHand.style.transition = 'all .05s';
}

setDate();
setInterval(setDate, 1000);