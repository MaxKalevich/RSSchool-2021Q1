import { BaseComponent } from '../base-component';
import './stopwatch.scss';

export class Stopwatch extends BaseComponent {
  public counter = 0;

  public action = false;

  constructor() {
    super('div', ['seconds']);

    this.action = false;
    this.element.innerHTML = '<span style="color: black;">10</span>';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  timer(action?: boolean) {
    this.counter++;
    this.element.innerHTML = `<span style="color: black; padding: 120px; line-height: 64px;">${this.counter}</span>`;
    if (!action) {
      setTimeout(() => this.timer(), 1000);
    } else {
      clearTimeout();
    }
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/explicit-module-boundary-types
  deadline(num: number) {
    const a = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      num--;
      this.element.innerHTML = `<span style="color: black; padding: 120px; line-height: 64px;">${num}</span>`;
      if (num <= 0) {
        clearInterval(a);
      }
    }, 1000);
  }
}
