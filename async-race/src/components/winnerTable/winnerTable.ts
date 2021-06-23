import './winnerTable.scss';
import { renderCarImageMini } from '../renderCarImageMini';
import { sorted, sortedWins } from './pagination/pagination';

let a = 1;
let b = 1;

function headingNameWins(parent: HTMLElement, name: string, className: string) {
  const heading = document.createElement('h2');
  heading.className = className;
  heading.innerHTML = name;
  heading.onclick = () => {
    if (b % 2) {
      ++b;
      sortedWins();
    } else if (!(b % 2)) {
      ++b;
      sortedWins('DESC');
    }
  };
  heading.style.cursor = 'pointer';
  heading.style.marginTop = '20px';
  parent.append(heading);
}

function headingNameTime(parent: HTMLElement, name: string, className: string) {
  const heading = document.createElement('h2');
  heading.className = className;
  heading.innerHTML = name;
  heading.onclick = () => {
    if (a % 2) {
      ++a;
      sorted();
    } else if (!(a % 2)) {
      ++a;
      sorted('DESC');
    }
  };
  heading.style.cursor = 'pointer';
  heading.style.marginTop = '20px';
  parent.append(heading);
}

function headingName(parent: HTMLElement, name: string, className: string) {
  const heading = document.createElement('h2');
  heading.className = className;
  heading.innerHTML = name;
  heading.style.cursor = 'pointer';
  heading.style.marginTop = '20px';
  parent.append(heading);
}

export function winnerCar(parent: HTMLElement, number: string, carName: string,
                          carColor: string, wins: string, bestTime: string): void {
  const carContainer = document.createElement('div');
  carContainer.className = 'car-container';
  carContainer.style.paddingTop = '20px';
  carContainer.style.justifyContent = 'space-around';
  parent.append(carContainer);

  const num = document.createElement('div');
  num.className = 'number';
  num.textContent = number;
  carContainer.append(num);

  const car = document.createElement('div');
  car.className = 'car';
  car.innerHTML = renderCarImageMini(carColor);
  carContainer.append(car);

  const name = document.createElement('div');
  name.className = 'name-car';
  name.textContent = carName;
  carContainer.append(name);

  const winCar = document.createElement('div');
  winCar.className = 'wins-car';
  winCar.textContent = wins;
  carContainer.append(winCar);

  const bestScore = document.createElement('div');
  bestScore.className = 'best-car';
  bestScore.textContent = bestTime;
  carContainer.append(bestScore);
}

export function winnerTable(parent: HTMLElement): void {
  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'table-wrapper';
  parent.append(tableWrapper);
  const header = document.createElement('div');
  header.className = 'header';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-around';
  tableWrapper.append(header);

  headingName(header, 'Number', 'number-heading');
  headingName(header, 'Car', 'number-heading');
  headingName(header, 'Name', 'number-heading');
  headingNameWins(header, 'Wins \t&#8595 &#8593;', 'number-heading-Wins');
  headingNameTime(header, 'Best-Time \t&#8595 &#8593;', 'number-best-time');
}
