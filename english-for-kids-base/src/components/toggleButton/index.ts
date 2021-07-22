import './style.scss';
import { state } from '../../stateApp/state';

class ToggleButton {
  private readonly tagLabel: HTMLLabelElement;

  constructor() {
    this.tagLabel = document.createElement('label');
    this.tagLabel.className = 'switch';
  }

  createButtonSwitch(): HTMLElement {
    const tagInput: HTMLInputElement = document.createElement('input');
    tagInput.type = 'checkbox';
    tagInput.className = 'checkbox';
    tagInput.addEventListener('click', () => {
      if (tagInput.checked) {
        state.playGame = true;
        const head = document.querySelectorAll('.card_main');
        const buttons: HTMLElement | null = document.querySelector('.btns');
        if (buttons !== null) {
          buttons.classList.add('start-game');
        }
        const cardSignature = document.querySelectorAll('.card-signature');
        const rotate = document.querySelectorAll('.rotate-icon');
        head.forEach((element) => {
          element.classList.add('start');
        });
        cardSignature.forEach((element) => {
          element.classList.add('none');
        });
        rotate.forEach((element) => {
          element.classList.add('none');
        });
      }
      if (!tagInput.checked) {
        state.startGame = false;
        state.playGame = false;

        if (!state.playGame) {
          const button: HTMLButtonElement | null = document.querySelector('.btn');
          if (button !== null) {
            button.classList.remove('game');
            button.textContent = 'START GAME';
          }
          const cardFront = document.querySelectorAll('.card__front');
          if (cardFront !== null) {
            cardFront.forEach((tag) => {
              tag.classList.remove('check');
            });
          }
        }
        const buttons: HTMLElement | null = document.querySelector('.btns');
        if (buttons !== null) {
          buttons.classList.remove('start-game');
        }
        const head = document.querySelectorAll('.card_main');
        const cardHeader = document.querySelectorAll('.card-signature');
        const rotate = document.querySelectorAll('.rotate-icon');
        head.forEach((element) => {
          element.classList.remove('start');
        });
        cardHeader.forEach((element) => {
          element.classList.remove('none');
        });
        rotate.forEach((element) => {
          element.classList.remove('none');
        });
      }
    });
    this.tagLabel.append(tagInput);

    const tagDivSlider: HTMLElement = document.createElement('div');
    tagDivSlider.className = 'slider';
    this.tagLabel.append(tagDivSlider);

    const tagDivText: HTMLElement = document.createElement('div');
    tagDivText.className = 'text';
    this.tagLabel.appendChild(tagDivText);
    return this.tagLabel;
  }
}

export default ToggleButton;
