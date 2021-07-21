import './card_style.scss';
import { state } from '../../stateApp/state';
import App from '../../pages/app';

class Card {
  private readonly container: HTMLElement;

  private readonly audio: HTMLAudioElement;

  private count: number;

  private countBadResponse: number;

  private j: number | null;

  private readonly stateWord: Array<string>;

  private stateWordShuffle: Array<string> | null;

  private readonly rating: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'card-container';
    this.audio = document.createElement('audio');
    this.audio.className = 'audio';
    this.stateWord = [];
    this.stateWordShuffle = null;
    this.count = 1;
    this.j = null;
    this.countBadResponse = 0;
    this.rating = document.createElement('div');
  }

  createCard(textFront: string, textBack: string, img: string, directory: string): HTMLElement {
    const arr = [];
    this.stateWordShuffle = this.shuffle(this.stateWord);
    this.stateWord.push(textFront);
    const card: HTMLElement = document.createElement('div');
    card.className = 'card';
    this.container.append(card);

    const cardFront: HTMLElement = document.createElement('div');
    cardFront.className = 'card__front';
    cardFront.style.backgroundImage = `url('${img}')`;
   // cardFront.style.backgroundImage = `url('/${directory}/${img}.jpg')`;
    cardFront.addEventListener('click', () => {
      if (!state.playGame) {
        this.audio.src = `/audio/${textFront}.mp3`;
        this.playAudio();
      }
      if (state.playGame && state.startGame) {
        if (textFront === state.currentWord && !cardFront.classList.contains('check')) {
          const imgStar: HTMLImageElement = document.createElement('img');
          imgStar.src = '/true.png';
          this.rating.append(imgStar);
          this.audio.src = '/audio/truffy.mp3';
          cardFront.classList.add('check');
          arr.push(textFront);
          this.playAudio();
          const setTime = setTimeout(() => {
            if (this.stateWordShuffle !== null) {
              this.startGame(this.stateWordShuffle[this.count]);
            }
            ++this.count;
          }, 1000);
          if (this.count === 8 && this.countBadResponse === 0) {
            state.startGame = false;
            clearTimeout(setTime);
            this.audio.src = '/audio/winner.mp3';
            App.renderNewPage('winner-page');
            this.playAudio();
            setTimeout(() => {
              App.renderNewPage('main-page');
            }, 5000);
            history.pushState({}, 'null', '#main-page');
        }
          if (this.count === 8 && this.countBadResponse !== 0) {
            state.startGame = false;
            clearTimeout(setTime);
            const curPage = document.getElementById('current-page');
            if (curPage !== null) {
              curPage.innerText = '';
              curPage.style.justifyContent = 'center';
              const textError = document.createElement('h1');
              textError.style.width = '100%';
              textError.style.textAlign = 'center';
              textError.innerText = `Errors: ${this.countBadResponse}`;
              curPage.append(textError);
              const image: HTMLImageElement = document.createElement('img');
              image.src = '/miy.png';
              curPage.append(image);
              const audio = document.createElement('audio');
              audio.src = '/audio/errors.mp3';
              curPage.append(audio);
              curPage.style.margin = '0 auto';
              audio.currentTime = 0;
              audio.play();
            }
            this.playAudio();
            setTimeout(() => {
              App.renderNewPage('main-page');
            }, 4000);
            history.pushState({}, 'null', '#main-page');
          }
        }
        if (textFront !== state.currentWord) {
          if (!cardFront.classList.contains('check')) {
            const imgStar: HTMLImageElement = document.createElement('img');
            imgStar.src = '/unnamed.png';
            this.rating.append(imgStar);
            ++this.countBadResponse;
            this.audio.src = '/audio/error.mp3';
            this.playAudio();
          }
        }
      }
    });
    card.append(cardFront);

    const cardSignature: HTMLElement = document.createElement('div');
    cardSignature.className = 'card-signature';
    if (state.playGame) {
      cardSignature.classList.add('none');
    }
    cardSignature.innerText = textFront;
    cardFront.append(cardSignature);

    const cardBack: HTMLElement = document.createElement('div');
    cardBack.className = 'card__back';
    cardBack.addEventListener('mouseleave', () => {
      if (cardBack.closest('.card')) {
        card.classList.remove('flipped');
      }
    });
    cardBack.style.backgroundImage = `url('${img}')`;;
    card.append(cardBack);

    const cardSignatureBack: HTMLElement = document.createElement('div');
    cardSignatureBack.className = 'card-signature-back';
    cardSignatureBack.innerText = textBack;
    cardBack.append(cardSignatureBack);

    const rotateIcon: HTMLElement = document.createElement('div');
    rotateIcon.className = 'rotate-icon';
    if (state.playGame) {
      rotateIcon.classList.add('none');
    }
    rotateIcon.onclick = () => {
      card.classList.add('flipped');
    };
    card.append(rotateIcon);

    this.container.appendChild(this.audio);
    return this.container;
  }

  createRating(): HTMLElement {
    this.rating.className = 'rating';
    return this.rating;
  }

  playAudio(): void {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  createStartButton(): void {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'btns';
    this.container.appendChild(buttonContainer);
    const button = document.createElement('div');
    button.className = 'btn';
    if (state.startGame || state.playGame) {
      buttonContainer.classList.add('start-game');
    } else {
      buttonContainer.classList.remove('start-game');
    }
    button.textContent = 'Start Game';
    button.classList.remove('game');
    button.addEventListener('click', () => {
      button.textContent = 'Start Game';
      state.startGame = true;
      setTimeout(() => {
        if (this.stateWordShuffle !== null) {
          this.startGame(this.stateWordShuffle[this.count - 1]);
        }
      }, 500);
      if (state.startGame) {
        button.classList.add('game');
        button.textContent = 'Repeat';
      }
    });
    buttonContainer.appendChild(button);
  }

  startGame(word: string): void {
    state.currentWord = word;
    if (state.startGame) {
      this.audio.src = `/audio/${word}.mp3`;
      state.currentWord = word;
      this.playAudio();
    }
  }

  shuffle(array: Array<string>): Array<string> {
    const newArr: Array<string> = array;
    for (let i = newArr.length - 1; i > 0; i--) {
      this.j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[this.j]] = [newArr[this.j], newArr[i]];
    }
    return newArr;
  }
}

export default Card;
