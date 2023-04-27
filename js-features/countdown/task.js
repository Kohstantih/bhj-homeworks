const timer = document.getElementById("timer");

function counterSeconds() {
    if(timer.textContent === '0') {
        clearInterval(idInterval);        
        alert("Вы победили в конкурсе");        
        return window.location = 'https://ru.wallpaper.mob.org/image/other-kubiki-voda-vsplesk-chernii-74123.html';//Повышенный уровень сложности #2 
    }; 
     return timer.textContent--;    
};

idInterval = setInterval(counterSeconds, 1000);


//Повышенный уровень сложности #1 

/*const timerHours = document.getElementById("timer_hours");

let hours = timerHours.textContent.slice(0, 2), minutes = timerHours.textContent.slice(3, 5), seconds = timerHours.textContent.slice(6);

function counterHours() {
    if(timerHours.textContent === '00:00:00') {
        clearInterval(idInterval);        
        return alert("Вы победили в конкурсе");
    };

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    };

    if (minutes === 0) {
        hours--;
        minutes = 59;
    };      

    seconds--;
    
    let hoursCount = `0${hours}`.slice(-2), minutesCount = `0${minutes}`.slice(-2), secondsCount = `0${seconds}`.slice(-2);
        
    return timerHours.textContent = `${hoursCount}:${minutesCount}:${secondsCount}`;
};

idInterval = setInterval(counterHours, 1000);*/