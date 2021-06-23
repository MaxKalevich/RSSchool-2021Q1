import './updateButton.scss';
import { updateCarInGarage } from '../../../asyncRaceAPI';
import { stateObject } from '../../../pages/garage-page/garage';
import App from '../../../pages/app/app';

export class UpdateButton {
  private readonly button: HTMLButtonElement;

  private inputUpdate: HTMLInputElement | null;

  constructor(parent: HTMLElement) {
    this.button = document.createElement('button');
    this.button.className = 'update-button';
    this.button.innerText = 'Update';
    this.inputUpdate = document.querySelector('.input-update');
    parent.append(this.button);
    this.button.onclick = () => {
      updateCarInGarage(stateObject.updateName, stateObject.updateColorValue, stateObject.carTarget);
      //  updateWinnerChange(stateObject.carTarget, stateObject.updateColorValue, stateObject.updateName, 1)
      stateObject.updateName = '';
      stateObject.updateColorValue = '';
      stateObject.carTarget = '';

      const input = document.querySelector('.input-update');
      const inputColor = document.querySelector('.input-color-create');
      // @ts-ignore
      input.value = '';
      // @ts-ignore
      inputColor.value = '';
      App.renderNewPage('garage-page');
    };
  }
}
