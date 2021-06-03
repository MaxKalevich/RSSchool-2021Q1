import { BaseComponent } from '../../base-component';
import './button.scss';
// eslint-disable-next-line import/no-cycle
import { Application } from '../../../pages/application/application';

export class Button extends BaseComponent {
  constructor() {
    super('button', ['button']);
    this.element.innerHTML = 'Start Game';
    this.element.onclick = () => {
      Application.renderNewPage('game-page');
    };
  }
}
