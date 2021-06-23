import './inputColorUpdate.scss';
import { stateObject } from '../../../pages/garage-page/garage';

export class InputColorUpdate {
  private readonly input: HTMLInputElement;

  constructor(parent: HTMLElement) {
    this.input = document.createElement('input');
    this.input.className = 'input-color-update';
    this.input.type = 'color';
    parent.append(this.input);
    this.input.addEventListener('input', () => this.getColor());
    this.getColor();
  }

  getColor(): void {
    stateObject.updateColorValue = this.input.value;
  }
}
