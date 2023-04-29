const dead = document.getElementById("dead"), lost = document.getElementById("lost");

function getHole(index){
    return document.getElementById(`hole${index}`);
};

for (let index = 1; index < 10; index++) {
    let hole = getHole(index);
    hole.onclick = () => {
        if(hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        };

        if(dead.textContent === '10') {
            alert("Победа");
            dead.textContent = 0;
            lost.textContent = 0;
            return 
        } else if(lost.textContent === '5') {
            alert("Поражение");
            dead.textContent = 0;
            lost.textContent = 0;
            return 
        };
    };
};