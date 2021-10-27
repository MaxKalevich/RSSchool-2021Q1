import './createButton.scss';

import { stateObject } from '../../../pages/garage-page/garage';
import { addCarInGarage } from '../../../asyncRaceAPI';
import App from '../../../pages/app/app';

export class CreateButton {
  createButton: HTMLButtonElement;

  private flag = true;

  constructor(parent: HTMLElement) {
    this.createButton = document.createElement('button');
    this.createButton.className = 'create-button';
    this.createButton.innerText = 'Create';
    parent.append(this.createButton);
    this.createButton.onclick = () => this.onClick();
  }

  onClick(): void {
    if (stateObject.inputValue !== '') {
      this.flag = false;
      addCarInGarage(stateObject.inputValue, stateObject.colorValue);
      App.renderNewPage('garage-page');
      stateObject.inputValue = '';
      const input:HTMLInputElement | null = document.querySelector('.input-create');
      const inputColor: HTMLInputElement | null = document.querySelector('.input-color-create');
      if (input !== null && inputColor !== null) {
        input.value = '';
        inputColor.value = '';
      }
    }
  }
}
