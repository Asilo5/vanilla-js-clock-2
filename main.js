const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360);

    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}



setInterval(setDate, 1000);