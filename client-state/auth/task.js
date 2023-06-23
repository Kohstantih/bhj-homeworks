const form = document.getElementById('signin__form');
const btnEnter = document.getElementById('signin__btn');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const userIdText = document.getElementById('user_id');
const card = document.querySelector('.card')

const btnExit = document.createElement('button');
btnExit.classList.add('btn');
btnExit.style.margin = 'auto'
btnExit.textContent = 'Выйти';
btnExit.style.display = 'none';
card.appendChild(btnExit);

let userId;

if(sessionStorage['user']) {
    userId = JSON.parse(sessionStorage['user']);
    enter();
};

btnEnter.addEventListener('click', (e) => {
    e.preventDefault();    

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then((result) => {
        if(result.success){
           userId = result['user_id'];
           enter();           
           sessionStorage.setItem('user', JSON.stringify(userId))
        } else {
            alert('Неверный логин/пароль')
        }
    });     
    
    form.reset();
});

btnExit.addEventListener('click', (e) => {
    e.preventDefault();

    sessionStorage.removeItem('user');
    exit()
})

function enter() {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userIdText.textContent = `${userId}`;
    btnExit.style.display = 'block'
};

function exit() {
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    btnExit.style.display = 'none'
}