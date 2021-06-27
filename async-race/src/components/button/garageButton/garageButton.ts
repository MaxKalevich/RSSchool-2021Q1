import App from '../../../pages/app/app';
import './garageButton.scss';

export class GarageButton {

  private readonly button: HTMLButtonElement;
  constructor(parent: HTMLElement) {
    this.button = document.createElement('button');
    this.button.className = 'garage-button';
    this.button.innerText = 'To Garage!';
    this.button.onclick = () => {
      App.renderNewPage('garage-page');
      // @ts-ignore
      window.location = '#garage-page';
    };
    parent.append(this.button);
  }

}
