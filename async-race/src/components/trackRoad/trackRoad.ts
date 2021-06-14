import './trackRoad.scss';
import { renderCarImage } from "../renderCarImage";
import { deleteCarInGarage } from "../../asyncRaceAPI";
import {stateObject} from "../../pages/garage-page/garage";
import App from "../../pages/app/app";

export const generateSingleTrackRoad = (parent: HTMLElement, colorCar: string, idCar: string, modelCar: string):void => {

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

  const buttonSelect = document.createElement('button');
  buttonSelect.classList.add('road-wrapper-button-select');
  buttonSelect.onclick = () => {
    stateObject.carTarget = idCar;
    stateObject.carNameToUpdate = modelCar;
    // @ts-ignore
    inputUpdate.value = modelCar;
  }
  buttonSelect.innerText = 'Select';
  road.appendChild(buttonSelect);

  const buttonRemove = document.createElement('button');
  buttonRemove.classList.add('road-wrapper-button-remove');
  buttonRemove.innerText = 'Remove';
  buttonRemove.onclick = () => {
    deleteCarInGarage(idCar);
    App.renderNewPage('garage-page');
  }
  road.appendChild(buttonRemove);




  const buttonStart = document.createElement('button');
  buttonStart.classList.add('road-wrapper-button-start');
  buttonStart.onclick = () => {

  }
  buttonStart.innerText = 'Start';
  road.appendChild(buttonStart);

  const buttonStop = document.createElement('button');
  buttonStop.classList.add('road-wrapper-button-stop');
  buttonStop.innerText = 'Stop';
  buttonStop.onclick = () => {

  }
  road.appendChild(buttonStop);





  const car = document.createElement('div');

  car.classList.add('road-wrapper-road-car-name');
  car.id = idCar;
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
  roadBorder.textContent = '--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------';
  roadBorder.classList.add('road-wrapper-border');
  roadWrapper.appendChild(roadBorder);
};
