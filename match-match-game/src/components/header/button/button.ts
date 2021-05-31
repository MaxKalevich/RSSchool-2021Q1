import { BaseComponent } from '../../base-component';
import './button.scss';
import { Stopwatch } from '../../stopwatch/stopwatch';

export class Button extends BaseComponent {
  constructor() {
    const time = new Stopwatch();

    super('button', ['button']);
    this.element.innerHTML = 'STOP GAME';
    this.element.onclick = () => {
      time.timer(true);
    };
  }
}
