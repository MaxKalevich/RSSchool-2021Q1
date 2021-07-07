import './trackRoad.scss';
import { renderCarImage } from '../renderCarImage';
import { carStart, deleteCarInGarage } from '../../asyncRaceAPI';
import { stateObject } from '../../pages/garage-page/garage';
import App from '../../pages/app/app';
import { carAnimations } from '../carAnimation';
import { deleteCarInWinners } from '../../winnersPageAPI';

export const generateSingleTrackRoad = (parent: HTMLElement, colorCar: string,
                                        idCar: number, modelCar: string):void => {
  const inputUpdate = document.querySelector('.input-update');

  const roadWrapper = document.createElement('div');
  roadWrapper.classList.add('road-wrapper');
  parent.appendChild(roadWrapper);

  const carName = document.createElement('span');
  carName.innerText = modelCar;
  carName.style.color = colorCar;
  carName.style.fontSize = '20px';
  roadWrapper.append(carName);

  const road = document.createElement('div');
  road.classList.add('road-wrapper-road');
  roadWrapper.appendChild(road);
  road.style.position = 'relative';

  const buttonSelect = document.createElement('button');
  buttonSelect.classList.add('road-wrapper-button-select');
  buttonSelect.onclick = () => {
    // @ts-ignore
    stateObject.updateName = modelCar;
    // @ts-ignore
    stateObject.carTarget = idCar;
    stateObject.carNameToUpdate = modelCar;
    // @ts-ignore
    inputUpdate.value = modelCar;
  };
  buttonSelect.innerText = 'Select';
  road.appendChild(buttonSelect);

  const buttonRemove = document.createElement('button');
  buttonRemove.classList.add('road-wrapper-button-remove');
  buttonRemove.innerText = 'Remove';
  buttonRemove.onclick = () => {
    deleteCarInGarage(idCar);
    deleteCarInWinners(idCar);
    App.renderNewPage('garage-page');
  };
  road.appendChild(buttonRemove);
  const buttonStop = document.createElement('button');
  const buttonStart = document.createElement('button');
  buttonStart.classList.add('road-wrapper-button-start');
  buttonStart.onclick = () => {
    carStart(idCar, colorCar, modelCar, 'no-flag', 'alone');
    buttonStop.disabled = false;
    buttonStop.style.backgroundColor = 'pink';
    // @ts-ignore
    buttonStart.disabled = true;
    buttonStart.style.backgroundColor = 'silver';
  };
  buttonStart.innerText = 'Start';
  road.appendChild(buttonStart);

  buttonStop.classList.add('road-wrapper-button-stop');
  buttonStop.innerText = 'Stop';
  buttonStop.disabled = true;
  buttonStop.onclick = () => {
    buttonStart.disabled = false;
    buttonStart.style.backgroundColor = 'pink';
    carAnimations(idCar, 0, 'reset');
    buttonStop.disabled = true;
    buttonStop.style.backgroundColor = 'silver';
  };
  road.appendChild(buttonStop);

  const car = document.createElement('div');

  car.classList.add('road-wrapper-road-car-name');
  car.id = `${idCar}-car-id`;
  car.style.position = 'relative';
  car.style.width = '80px';
  car.innerHTML = renderCarImage(colorCar);
  car.dataset.color = 'black';
  road.appendChild(car);

  const finish = document.createElement('img');
  finish.classList.add('road-wrapper-road-finish');
  finish.src = 'finish.svg';
  finish.style.display = 'inline-block';
  finish.style.float = 'right';
  finish.style.marginRight = '120px';
  road.appendChild(finish);

  const roadBorder = document.createElement('div');
  roadBorder.classList.add('road-wrapper-border');
  roadWrapper.appendChild(roadBorder);
};
