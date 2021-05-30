import { delay } from "../../shared/delay";
import {BaseComponent} from "../base-component";
import {Card} from "../card/card";
import {CardsField} from "../cards-field/cards-field";

const FLIP_DELAY = 3000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;
  private activeCard?: Card;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images.concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - .5);

    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
   await card.flipToFront();
   await delay(FLIP_DELAY);
      if (!this.activeCard) this.activeCard = card;
      else {
        if (this.activeCard.image != card.image) {
         await this.activeCard.flipToBack();
         await card.flipToBack();
        }
      }
  }
}
