import './cardMain_style.scss';
import App, { PageIds } from '../../pages/app';

class CardMain {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'card-container';
  }

  createCard(text: string, id: string) {
    const card = document.createElement('a');
    card.className = 'card';
    card.id = id;
    card.onclick = () => {
      App.renderNewPage(id);
      // @ts-ignore
      window.location = `#${id}`;
    };
    this.container.append(card);

    const cardFront = document.createElement('div');
    cardFront.className = 'card__front';
    cardFront.style.backgroundImage = `url('/categories/${text}.jpg')`;
    card.append(cardFront);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerText = text;
    cardFront.append(cardHeader);
    return this.container;
  }
}

export default CardMain;
