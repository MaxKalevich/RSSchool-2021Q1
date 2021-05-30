import {BaseComponent} from "../base-component";
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
  <div class="card">
    <div class="card__front" style="background-image: url('/match-match-game/public/images/${image}')"></div>
    <div class="card__back"></div>
  </div>
    `;
  }

  flipToBack() {
   return this.flip(true);
  }

  flipToFront() {
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, !isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    })
  }
}
