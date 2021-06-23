import './paginationMainPage.scss';
import { carStart, getCarsInGarage } from '../../asyncRaceAPI';
import { generateSingleTrackRoad } from '../trackRoad/trackRoad';
import { carAnimations } from '../carAnimation';

const buttonRace = document.createElement('button');
buttonRace.className = 'button-race';
buttonRace.textContent = 'RACE!';

const buttonReset = document.createElement('button');
buttonReset.className = 'button-reset';
buttonReset.textContent = 'RESET!';

const pageCount = document.createElement('h2');
pageCount.className = 'page-count';

export function renderCars(numberPage: number, parent: HTMLElement): void {
  pageCount.innerText = `Page #${numberPage}`;
  getCarsInGarage(numberPage, 7).then((response) => {
    for (let i = 0; i < response.length; i++) {
      generateSingleTrackRoad(parent, response[i].color, response[i].id, response[i].name);
    }
    buttonRace.disabled = false;
    buttonRace.onclick = () => {
      buttonRace.disabled = true;
      const btnStop = document.querySelectorAll('.road-wrapper-button-stop');
      const btnStart = document.querySelectorAll('.road-wrapper-button-start');
      for (let i = 0; i < response.length; i++) {
        carStart(response[i].id, response[i].color, response[i].name, 'race');
        // @ts-ignore
        btnStop[i].disabled = false;
        btnStop[i].classList.remove('disabled');
        btnStop[i].classList.add('enabled');
        // @ts-ignore
        btnStart[i].disabled = true;
        btnStart[i].classList.add('disabled');
      }
    };

    buttonReset.onclick = () => {
      buttonRace.disabled = false;
      for (let i = 0; i < 100; i++) {
        carAnimations(i, 0, 'reset');
      }
    };
  });
}

export function paginationMain(numberCars: number, parent: HTMLElement): void {
  let countPage = 1;
  const paginationWrapper = document.createElement('div');
  paginationWrapper.className = 'wrapper-main';
  parent.append(paginationWrapper);

  const btnPrev = document.createElement('button');
  btnPrev.className = 'prev';
  btnPrev.innerText = 'PREV';
  btnPrev.onclick = () => {
    btnPrev.disabled = false;

    const pages = document.querySelectorAll('.road-wrapper');
    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }
    if (countPage !== 1) {
      --countPage;
    } else if (countPage === 1) {
      btnPrev.disabled = true;
    }
    renderCars(countPage, parent);
  };
  paginationWrapper.append(buttonReset);
  paginationWrapper.append(buttonRace);
  paginationWrapper.append(pageCount);
  paginationWrapper.append(btnPrev);

  const btnNext = document.createElement('button');
  btnNext.className = 'next';
  btnNext.innerText = 'NEXT';
  btnNext.onclick = () => {
    btnPrev.disabled = false;

    const pages = document.querySelectorAll('.road-wrapper');
    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }
    ++countPage;
    renderCars(countPage, parent);
  };
  paginationWrapper.append(btnNext);
  renderCars(numberCars, parent);
}
