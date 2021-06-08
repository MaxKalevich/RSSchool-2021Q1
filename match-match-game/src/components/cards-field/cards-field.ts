import { BaseComponent } from '../base-component';
import './cards-field.scss';
import { Card } from '../card/card';

const SHOW_TIME = 11;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
