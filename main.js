let hourTip = document.getElementById('hourTip');
let minTip = document.getElementById('minTip');
let secTip = document.getElementById('secTip');

setInterval(() => {
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // Convert 24-hour time to 12-hour format
    hour = hour % 12;

    // Calculate rotation degrees
    let hourDeg = (hour * 30) + (min * 0.5);      // 30° per hour, 0.5° per minute
    let minDeg = (min * 6) + (sec * 0.1);         // 6° per minute, 0.1° per second
    let secDeg = sec * 6;                         // 6° per second

    // Apply rotation
    hourTip.style.transform = `rotate(${hourDeg}deg) scaleY(.6)`;
    minTip.style.transform = `rotate(${minDeg}deg) scaleY(.75)`;
    secTip.style.transform = `rotate(${secDeg}deg) scaleY(.8)`;

}, 1000); // Update every second
