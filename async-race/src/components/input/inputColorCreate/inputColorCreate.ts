import './inputColorCreate.scss';
import { stateObject } from '../../../pages/garage-page/garage';

export class InputColorCreate {
  private readonly input: HTMLInputElement;

  constructor(parent: HTMLElement) {
    this.input = document.createElement('input');
    this.input.className = 'input-color-create';
    this.input.type = 'color';
    parent.append(this.input);
    this.input.addEventListener('input', () => this.getColor());
    this.getColor();
  }

  getColor(): void {
    stateObject.colorValue = this.input.value;
  }
}
