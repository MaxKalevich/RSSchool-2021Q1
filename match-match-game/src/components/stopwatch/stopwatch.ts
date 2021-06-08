import { BaseComponent } from '../base-component';
import './stopwatch.scss';

export class Stopwatch extends BaseComponent {
  public sec: any;

  public min: any = 0;

  public inter: any;

  public action;

  constructor() {
    super('div', ['seconds']);
    this.sec = 0;
    this.action = true;
    this.element.innerHTML = '<span style="color: white;">Ready?</span>';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  timer(flag?: boolean): void {
    if (this.sec === 60) {
      this.sec = 0;
      this.min += 1;
    }

    if (this.sec <= 9) {
      this.sec = `0${this.sec}`;
    }

    const time = `${this.min <= 9 ? `0${this.min}` : this.min}:${this.sec}`;
    const inter = setTimeout(() => this.timer(), 1000);
    if (!this.action) {
      clearTimeout(inter);
      // @ts-ignore
      return `${this.min <= 9 ? `0${this.min}` : this.min}:${this.sec}`;
    }
    if (this.min === '00' && this.sec === '00') {
      this.sec = '00';
      this.min = '00';
      clearInterval(inter);
    }
    this.element.innerHTML = `<span style="color: white; padding: 120px; line-height: 64px;">${time}</span>`;
    this.sec++;
    return this.sec;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/explicit-module-boundary-types
  deadline(num: any) {
    let number = num;
    const a = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      number--;
      if (number < 10) {
        number = `0${number}`;
      }
      this.element.innerHTML = `<span style="color: white; padding: 120px; line-height: 64px;">00:${number}</span>`;
      if (number <= 0) {
        clearInterval(a);
      }
    }, 1000);
  }

  clear() {
    this.element.innerHTML = '';
  }
}
