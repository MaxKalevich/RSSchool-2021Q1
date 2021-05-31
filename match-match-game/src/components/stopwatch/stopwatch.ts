import { BaseComponent } from '../base-component';
import './stopwatch.scss';

export class Stopwatch extends BaseComponent {
  public counter = 0;

  public action = false;

  constructor() {
    super('div', ['seconds']);

    this.action = false;
    this.element.innerHTML = '<span style="color: red;">This is Timer</span>';
  }

  timer(action?: boolean) {
    this.counter++;
    this.element.innerHTML = `<span style="color: red; padding: 120px; line-height: 64px;">${this.counter}</span>`;
    if (!action) {
      setTimeout(() => this.timer(), 1000);
    } else {
      clearTimeout();
    }
  }
}
