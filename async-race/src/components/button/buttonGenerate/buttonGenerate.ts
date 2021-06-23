import './buttonGenerate.scss';
import { addOneHundredCars } from '../../../asyncRaceAPI';
import App from '../../../pages/app/app';

export class ButtonGenerate {
  private readonly button: HTMLButtonElement;

  private carName: Array<string> | undefined;

  constructor(parent: HTMLElement) {
    this.button = document.createElement('button');
    this.button.className = 'button-generate';
    this.button.innerText = 'Generate!';
    this.button.onclick = () => this.getCars();
    parent.append(this.button);
  }

  getCars(): void {
    this.carName = ['Tesla', 'Volkswagen', 'Audi', 'DeLorean', 'BMW', 'Rover', 'Fiat', 'Subaru', 'Peugeot', 'Chrysler'];
    const carModel = ['Model S', 'Golf', 'R8', '1985', 'M5', '200', 'Ducato', 'WRX', '406', '300C'];
    const carColor = ['blue', 'green', 'black', 'yellow', 'olive', 'violet', 'gray', 'white', 'red', 'brown'];

    for (let i = 0; i < 100; i++) {
      const getMyCar = Math.floor(Math.random() * 10);
      const carNames = `${this.carName[getMyCar]} ${carModel[getMyCar]}`;
      const carColors = carColor[getMyCar];

      addOneHundredCars(carNames, carColors).then((response) => {
        if (response) {
          setTimeout(() => App.renderNewPage('garage-page'), 1500);
        }
      });
    }
  }
}
