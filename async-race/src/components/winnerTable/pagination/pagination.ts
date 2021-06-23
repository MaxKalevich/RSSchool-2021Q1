import './pagination.scss';
import { getWinnersCars, getWinnersCarsSorted } from '../../../winnersPageAPI';
import { winnerCar } from '../winnerTable';

let countPage = 1;

const pageCount = document.createElement('h2');
pageCount.className = 'page-count';

export function sorted(asc?: string) {
  getWinnersCarsSorted(countPage, 10, 'time', asc).then((response) => {
    const pages = document.querySelectorAll('.car-container');

    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }
    let count = 1;
    for (const keys in response) {
      const tableWrap = document.querySelector('.table-wrapper');
      // @ts-ignore
      winnerCar(tableWrap, count++, response[keys].name, response[keys].color, response[keys].wins, response[keys].time);
    }
  });
}

export function sortedWins(asc?: string) {
  getWinnersCarsSorted(countPage, 10, 'wins', asc).then((response) => {
    const pages = document.querySelectorAll('.car-container');
    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }
    let count = 1;
    for (const keey in response) {
      const tableWrap = document.querySelector('.table-wrapper');
      // @ts-ignore
      winnerCar(tableWrap, count++, response[keey].name, response[keey].color, response[keey].wins, response[keey].time);
    }
  });
}

export function renderPage(numberPage = 1) {
  getWinnersCars(numberPage, 10).then((response) => {
    pageCount.innerText = `Page #${numberPage}`;
    const tableWrap = document.querySelector('.table-wrapper');
    let count = 1;
    for (const key in response) {
      // @ts-ignore
      winnerCar(tableWrap, count++, response[key].name, response[key].color, response[key].wins, response[key].time);
    }
  });
}

export function pagination(parent: HTMLElement) {
  const paginationWrapper = document.createElement('div');
  paginationWrapper.className = 'wrapper';
  parent.append(paginationWrapper);

  paginationWrapper.append(pageCount);

  const btnPrev = document.createElement('button');
  btnPrev.className = 'prev';
  btnPrev.innerText = 'PREV';
  btnPrev.onclick = () => {
    const pages = document.querySelectorAll('.car-container');
    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }
    if (countPage !== 1) {
      --countPage;
    } else if (countPage === 1) {
      btnPrev.disabled = true;
    }

    renderPage(countPage);
  };
  paginationWrapper.append(btnPrev);

  const btnNext = document.createElement('button');
  btnNext.className = 'next';
  btnNext.innerText = 'NEXT';
  btnNext.onclick = () => {
    btnPrev.disabled = false;
    const pages = document.querySelectorAll('.car-container');
    // @ts-ignore
    for (let i = 0; i < pages.length; i++) {
      pages[i].className = 'none';
    }

    // @ts-ignore
    // tableWrap.innerHTML = '';
    ++countPage;
    renderPage(countPage);
  };
  paginationWrapper.append(btnNext);
}
