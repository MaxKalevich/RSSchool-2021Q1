import './styleHamburger.scss';
import { PageIds } from '../../pages/app';

const Buttons = [
  {
    id: PageIds.mainPage,
    text: 'Main Page',
  },
  {
    id: PageIds.actionSetA,
    text: 'Action (Set A)',
  },
  {
    id: PageIds.actionSetB,
    text: 'Action (Set B)',
  },
  {
    id: PageIds.actionSetC,
    text: 'Action (Set C)',
  },
  {
    id: PageIds.adjective,
    text: 'Adjective',
  },
  {
    id: PageIds.animalSetA,
    text: 'Animal (Set A)',
  },
  {
    id: PageIds.animalSetB,
    text: 'Animal (Set B)',
  },
  {
    id: PageIds.clothes,
    text: 'Clothes',
  },
  {
    id: PageIds.emotion,
    text: 'Emotion',
  },
];

class Hamburger {
  private divWrapper: HTMLElement;

  constructor() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.className = 'hamburger-menu';
  }

  createHamburger() {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'menu__toggle';
    this.divWrapper.append(input);

    const label: HTMLLabelElement = document.createElement('label');
    label.className = 'menu__btn';
    label.setAttribute('for', 'menu__toggle');
    this.divWrapper.append(label);

    const span: HTMLElement = document.createElement('span');
    label.append(span);

    const ul: HTMLElement = document.createElement('ul');
    ul.className = 'menu__box';
    this.divWrapper.append(ul);

    const a: HTMLElement = document.createElement('a');
    a.className = 'link';
    a.innerText = 'Select a category for the game';
    ul.append(a);

    const burgerButton = document.createElement('div');
    burgerButton.className = 'burger-button-container';
    Buttons.forEach((button) => {
      const buttonTagHtml = document.createElement('a');
      buttonTagHtml.href = `#${button.id}`;
      buttonTagHtml.innerText = button.text;
      burgerButton.append(buttonTagHtml);
    });
    ul.append(burgerButton);
    return this.divWrapper;
  }
}

export default Hamburger;
