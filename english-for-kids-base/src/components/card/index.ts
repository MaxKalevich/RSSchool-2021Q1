import './card_style.scss';

class Card {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'card-container';
  }

  createCard(textFront: string, textBack: string, img: string, directory: string) {
    const card = document.createElement('div');
    card.className = 'card';
    this.container.append(card);

    const cardFront = document.createElement('div');
    cardFront.className = 'card__front';
    cardFront.style.backgroundImage = `url('/${directory}/${img}.jpg')`;
    card.append(cardFront);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.innerText = textFront;
    cardFront.append(cardHeader);

    const cardBack = document.createElement('div');
    cardBack.className = 'card__back';
    cardBack.style.backgroundImage = `url('/${directory}/${img}.jpg')`;
    card.append(cardBack);

    const cardHeaderDouble = document.createElement('div');
    cardHeaderDouble.className = 'card-header-double';
    cardHeaderDouble.innerText = textBack;
    cardBack.append(cardHeaderDouble);

    const rotate = document.createElement('div');
    rotate.className = 'rotate';
    rotate.onclick = () => {
      card.classList.add('flipped');
    };
    card.append(rotate);
    return this.container;
  }
}

export default Card;
