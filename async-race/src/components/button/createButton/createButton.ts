import './createButton.scss';

import { stateObject } from '../../../pages/garage-page/garage';
import { addCarInGarage } from '../../../asyncRaceAPI';
import App from "../../../pages/app/app";

export class CreateButton {

  createButton: HTMLButtonElement;
  constructor(parent: HTMLElement) {
    this.createButton = document.createElement('button');
    this.createButton.className = 'create-button';
    this.createButton.innerText = 'Create';
    parent.append(this.createButton);
    this.createButton.onclick = () => this.onClick();
  }

  onClick() {
    if (stateObject.inputValue === '') {
      console.log("Нет значений");
    }
    else {
      addCarInGarage(stateObject.inputValue, stateObject.colorValue).then(res => console.log());
      App.renderNewPage('garage-page');
      stateObject.inputValue = '';
      // @ts-ignore
      const input = document.querySelector('.input-create');
      const inputColor = document.querySelector('.input-color-create');
      // @ts-ignore
      input.value = '';
      // @ts-ignore
      inputColor.value = '';
    }
  }
}
