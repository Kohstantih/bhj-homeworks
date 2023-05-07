class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    this.intervalId = 1;   

    this.reset();

    this.registerEvents();
  }


  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;    
  }

  timerCount() {
    this.intervalId = setInterval(() => {      
      if(+this.timerElement.textContent === 0) {
        this.fail();
      };
      
      this.timerElement.textContent--;      
    },1000);
  }

  registerEvents() {
    document.addEventListener('keyup', () => {
      if(event.code === 'AltLeft' || event.code === 'ShiftLeft' || event.code === 'ControlLeft') {        
        return;
      } else if (event.key.toLowerCase().charCodeAt() === this.currentSymbol.textContent.toLowerCase().charCodeAt()) {
        this.success();        
      } else {
        this.fail();        
      };
    });
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    clearInterval(this.intervalId);

    const word = this.getWord();

    this.renderWord(word);

    this.timerElement.textContent = this.wordElement.querySelectorAll('.symbol').length;
    this.timerCount();    
  }

  getWord() {
    const words = [
        'bob',
        'awesome день',
        'учиться в netology',
        'hello Мир',
        'маленький kitty',
        'rock за бобров',
        'смотри на youtube',
        'popcorn в кинотеатре',
        'поход в cinema',
        'love это',
        'изучаю javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));