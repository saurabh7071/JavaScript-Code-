
const display = document.querySelector('.display');
const pause = document.querySelector('.pause');
const play = document.querySelector('.play');
const restart = document.querySelector('.restart');

let [seconds, minutes, hours] = [0, 0, 0]
let timer = null;

function displayTime(){
    seconds++
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    } 

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    display.innerHTML = `${h} : ${m} : ${s}`
}

function startWatch(){
    if(timer !== null){
        clearInterval(timer); 
    }
    timer = setInterval(displayTime, 1000);
}

play.addEventListener('click', startWatch);   

pause.addEventListener('click', ()=>{
    clearInterval(timer);
})

restart.addEventListener('click', function(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = "00 : 00 : 00";
})