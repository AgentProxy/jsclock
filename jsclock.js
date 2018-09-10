
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.getElementById('time');
var clock = {
    setDate: function(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    if(seconds == 59){
        secondHand.style.transition = "initial";
    }
    if(minutes == 59){
        secondHand.style.transition = "initial";
    }
    if(hours == 12){
        secondHand.style.transition = "initial";
    }
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes/60)*360) + 90;
    const hoursDegrees = ((hours/12)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
}
setInterval(clock.setDate, 1000);