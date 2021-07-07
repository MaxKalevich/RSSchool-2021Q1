import { renderCarImage } from '../renderCarImage';
import {getCarById} from "../../asyncRaceAPI";
import {makeLogger} from "ts-loader/dist/logger";
export function newCar(parent: HTMLElement, idCar: number) {
  const car = document.createElement('div');
  getCarById(idCar).then(response => {
    return console.log(response)
    // car.classList.add('road-wrapper-road-car');
    // car.id = response.id;
    // car.innerHTML = response.name;
    // car.innerHTML = renderCarImage(response.color);
    // car.dataset.color = 'black';
    // parent.appendChild(car);
  })

}
