import './cardMain_style.scss';
import { state } from '../../stateApp/state';

class CardMainPage {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'card-container';
  }

  createCardMainPage(text: string, id: string, image: string): HTMLElement {
    const card = document.createElement('a');
    card.className = 'card_main';
    card.style.backgroundImage = `url('/${image}')`;
    card.id = id;
    card.href = `#${id}`;
    this.container.append(card);

    const cardFront = document.createElement('div');
    cardFront.className = 'card__front_main';
    cardFront.style.backgroundImage = `url('/categories/${text}.jpg')`;
    card.append(cardFront);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-signature_main';
    if (state.playGame) {
      card.classList.add('start');
    }
    cardHeader.innerText = text;
    cardFront.append(cardHeader);
    return this.container;
  }
}

export default CardMainPage;
