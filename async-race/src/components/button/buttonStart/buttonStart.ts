import './buttonStart.scss';

export class ButtonStart {

  private readonly button: HTMLButtonElement;
  constructor(parent: HTMLElement) {
    this.button = document.createElement('button');
    this.button.className = 'button-start';
    parent.append(this.button);
  }
}
