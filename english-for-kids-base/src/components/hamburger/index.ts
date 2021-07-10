import './styleHamburger.scss';
import { PageIds } from '../../pages/app';
import ModalWindow from "../modalWindow";

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
    id: PageIds.auto,
    text: 'Auto',
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
  private readonly divWrapper: HTMLElement;

  private modal: ModalWindow;

  constructor() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.className = 'hamburger-menu';
    this.modal = new ModalWindow();
  }

  createHamburger(): HTMLElement {
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

    const burgerButton: HTMLElement = document.createElement('div');
    burgerButton.className = 'burger-button-container';
    Buttons.forEach((button) => {
      const buttonTagHtml = document.createElement('a');
      buttonTagHtml.href = `#${button.id}`;
      buttonTagHtml.className = 'sidebar-link';
      buttonTagHtml.innerText = button.text;
      burgerButton.append(buttonTagHtml);
    });
    ul.append(burgerButton);

    const login = document.createElement('button');
    login.className = 'login';
    login.textContent = 'Login';
    login.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      if (modal !== null) {
        modal.style.display = 'block';
      }
    });
    ul.appendChild(login);
    this.modal.render(this.divWrapper);
    return this.divWrapper;
  }
}

export default Hamburger;
