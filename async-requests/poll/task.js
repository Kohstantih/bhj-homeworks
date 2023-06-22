let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = 'text';

xhr.addEventListener('readystatechange', (e) => {
    if(xhr.DONE) {   
        const response = JSON.parse(xhr.responseText);
        
        const title = response.data.title;
        const answers = response.data.answers;        

        addPoll(title, answers);

        window['poll__answers'].addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') {
                alert('Спасибо, ваш голос засчитан!');

                let xhr = new XMLHttpRequest;
                
                xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
                
                xhr.addEventListener('readystatechange', (e) => {
                    if(xhr.DONE) {
                        const response = JSON.parse(xhr.responseText);                        
                        const responseStat = [];

                        for(key in response) {
                            responseStat.push([...response[key]]);
                        };

                        let votesSum = 0;                        
                        
                        responseStat[0].forEach(el => {
                            votesSum += el.votes;
                        });                        

                        responseStat[0].forEach(el => {
                            const answer = el.answer;
                            const rating = (el.votes / votesSum * 100).toFixed(2);
                            
                            addRating(answer, rating);
                        }); 
                    }; 
                    xhr.abort();
                });                
                
                xhr.send(`vote=${response.id}&answer=${e.target.dataset.positionId}`);
            }
        });        
    };
    xhr.abort();
});

function addPoll(title, answers) {
    window['poll__title'].textContent = title;

    answers.forEach((el, index) => {
        const pollAnswer = document.createElement('button');
        pollAnswer.classList.add('poll__answer');
        pollAnswer.dataset.positionId = index;
        pollAnswer.textContent = el;
        window['poll__answers'].appendChild(pollAnswer);
    });
};

function addRating(answer, rating) {
    const btns = window['poll__answers'].querySelectorAll('button');
    btns.forEach(el => {
        el.remove();
    });
    const answerBox = document.createElement('div');
    answerBox.textContent = `${answer}: ${rating}%`
    window['poll__answers'].appendChild(answerBox);
};

xhr.send();