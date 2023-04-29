const timer = document.getElementById("timer");

function counterSeconds() {
    if(timer.textContent === '0') {
        clearInterval(idInterval);
        return alert("Вы победили в конкурсе");
    };

    timer.textContent--;    
};

idInterval = setInterval(counterSeconds, 1000);


//Повышенный уровень сложности #1 & #2

/*const timerHours = document.getElementById("timer_hours"), link = document.getElementById("link")

let hours = timerHours.textContent.slice(0, 2), minutes = timerHours.textContent.slice(3, 5), seconds = timerHours.textContent.slice(6);

function counterHours() {
    if(timerHours.textContent === '00:00:00') {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе");
        link.href ='https://w.forfun.com/fetch/3f/3f6eaa57ddb91b3bede5e6abdd78f8e3.jpeg?h=900&r=0.5';                
        return link.click();
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