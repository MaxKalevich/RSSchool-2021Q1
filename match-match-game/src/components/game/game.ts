import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import './game.scss';
import { Stopwatch } from '../stopwatch/stopwatch';

const FLIP_DELAY = 1500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly stopwatch: Stopwatch;

  private count: boolean;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.count = false;
    this.stopwatch = new Stopwatch();
    this.element.appendChild(this.stopwatch.element);

    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  newGame(images: string[]) {
    this.stopwatch.deadline(10);
    this.cardsField.clear();
    const cards = images.concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (card.isFlipped) {
      if (!this.count) {
        this.stopwatch.timer();
        this.count = true;
      }
    }
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    const cardsContainerLength = document.querySelectorAll('.card-container').length;
    const flipped = document.querySelectorAll('.flipped').length;
    console.log(cardsContainerLength);
    console.log(flipped);
    if (flipped === 0) {
      alert('You Win!');
    }
    if (this.activeCard.image !== card.image) {
      let cardElem = card.element.children[0].children[0].classList.add('red');
      let activeCardElem = this.activeCard.element.children[0].children[0].classList.add('red');
      await delay(FLIP_DELAY);
      cardElem = card.element.children[0].children[0].classList.remove('red');
      activeCardElem = this.activeCard.element.children[0].children[0].classList.remove('red');
      await Promise.all([await this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      const cardElem = card.element.children[0].children[0].classList.add('green');
      const activeCardElem = this.activeCard.element.children[0].children[0].classList.add('green');
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
