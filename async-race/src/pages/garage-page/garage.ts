import Page from '../page';
import Button from '../../components/button/button';
import { generateSingleTrackRoad } from '../../components/trackRoad/trackRoad';
import { getAllCarsInGarage, getData } from '../../asyncRaceAPI';
import { InputCreate } from '../../components/input/inputCreate/inputCreate';
import { InputColorCreate } from '../../components/input/inputColorCreate/inputColorCreate';
import './garagePage.scss';
import { CreateButton } from '../../components/button/createButton/createButton';
import { UpdateButton } from '../../components/button/updateButton/updateButton';
import { InputUpdate } from '../../components/input/inputUpdate/inputUpdate';
import { InputColorUpdate } from '../../components/input/inputColorUpdate/inputColorUpdate';
import App from "../app/app";

export const stateObject = {
  inputValue: '',
  colorValue: 'black',
  updateName: '',
  updateColorValue: 'black',
  carTarget: '',
  carNameToUpdate: '',
  carsCount: '',
}

let stateObjectCars = {};

class Garage extends Page {
  private readonly title: HTMLElement;
  private readonly garageHeader: HTMLElement;
  public countCars: string | null = null;

  constructor(id: string) {
    super(id);

    this.title = this.addTagFromPage('GARAGE!');
    this.container.append(this.title);

    this.garageHeader = this.addTagFromPage('Garage');
    this.garageHeader.className = 'garage-header';
    this.container.append(this.garageHeader);

    this.renderCars();

    this.garageHeader.innerText = `Garage (${stateObject.carsCount})`;
    new InputCreate(this.container);
    new InputColorCreate(this.container);
    new CreateButton(this.container);
    new InputUpdate(this.container);
    new InputColorUpdate(this.container);
    new UpdateButton(this.container);
    new Button().getButton(this.container, 'RACE');
    new Button().getButton(this.container, 'RESET');
    new Button().getButtonGenerate(this.container, 'GENERATE');
    this.getCountCars();
  }

  getCountCars() {
    getAllCarsInGarage(1, 3).then((response: string | null) => {
      if (response !== stateObject.carsCount) {
        // @ts-ignore
        stateObject.carsCount = response;
        this.garageHeader.innerText = `Garage (${response})`;
        App.renderNewPage('garage-page');
      } else if (response === stateObject.carsCount) {
        console.log("Nothing")
      }
    });
  }

  renderCars() {
    getData('garage').then((response) => {
      if (stateObjectCars !== response) {
        stateObjectCars = response;
        for (let key in response) {
          generateSingleTrackRoad(this.container, response[key].color, response[key].id, response[key].name);
        }
      }
      if (stateObjectCars === response) {
        console.log("Машинок не прибавилось")
      }
    });
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Garage;
