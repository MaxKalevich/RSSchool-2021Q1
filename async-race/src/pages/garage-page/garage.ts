import './garagePage.scss';

import Page from '../page';
import { getAllCarsInGarage } from '../../asyncRaceAPI';
import { InputCreate } from '../../components/input/inputCreate/inputCreate';
import { InputColorCreate } from '../../components/input/inputColorCreate/inputColorCreate';
import { CreateButton } from '../../components/button/createButton/createButton';
import { UpdateButton } from '../../components/button/updateButton/updateButton';
import { InputUpdate } from '../../components/input/inputUpdate/inputUpdate';
import { InputColorUpdate } from '../../components/input/inputColorUpdate/inputColorUpdate';
import App from '../app/app';
import { ButtonGenerate } from '../../components/button/buttonGenerate/buttonGenerate';
import { paginationMain } from '../../components/paginationMainPage/paginationMainPage';
// @ts-ignore
window.location = '#garage-page';

export const stateObject = {
  inputValue: '',
  colorValue: 'black',
  updateName: '',
  updateColorValue: 'black',
  carTarget: '',
  carNameToUpdate: '',
  carsCount: '',
};

class Garage extends Page {
  private readonly garageHeader: HTMLElement;

  constructor(id: string) {
    super(id);

    this.garageHeader = this.addTagFromPage('Garage');
    this.garageHeader.className = 'garage-header';
    this.container.append(this.garageHeader);
    this.garageHeader.innerText = `Garage (${stateObject.carsCount})`;
    new InputCreate(this.container);
    new InputColorCreate(this.container);
    new CreateButton(this.container);
    new InputUpdate(this.container);
    new InputColorUpdate(this.container);
    new UpdateButton(this.container);
    new ButtonGenerate(this.container);
    this.getCountCars();
    paginationMain(1, this.container);
  }

  getCountCars(): void {
    getAllCarsInGarage(1, 3).then((response: string | null) => {
      if
      (response !== stateObject.carsCount) {
        // @ts-ignore
        stateObject.carsCount = response;
        this.garageHeader.innerText = `Garage (${response})`;
        App.renderNewPage('garage-page');
      }
    });
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Garage;
