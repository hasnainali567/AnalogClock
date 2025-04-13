let hourTip = document.getElementById('hourTip');
let minTip = document.getElementById('minTip');
let secTip = document.getElementById('secTip');

setInterval(() => {
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour % 12;

    let hourDeg = (hour * 30) + (min * 0.5);     
    let minDeg = (min * 6) + (sec * 0.1);         
    let secDeg = sec * 6;                       

    hourTip.style.transform = `rotate(${hourDeg}deg) scaleY(.6)`;
    minTip.style.transform = `rotate(${minDeg}deg) scaleY(.75)`;
    secTip.style.transform = `rotate(${secDeg}deg) scaleY(.8)`;

}, 1000); 
