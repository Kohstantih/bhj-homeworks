const clicker = document.getElementById("clicker__counter"), cookie = document.getElementById("cookie"), speed = document.getElementById("clicker__speed");

let startTimer = 0, lastClick = 0;

function clickerCokie() {
    if (+clicker.textContent === 0) {
        startTimer = new Date();
    } else {
        lastClick = new Date();
    };    
    clicker.textContent++;
    
    if (cookie.width === 200) {
        cookie.width = 250;        
    } else {
        cookie.width = 200;        
    };
    
    if (startTimer !== 0 && lastClick !== 0) {        
        speed.textContent = ((clicker.textContent * 1000) / (lastClick - startTimer)).toFixed(2);
    };
};

cookie.onclick = clickerCokie;