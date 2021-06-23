import { carAnimations } from './components/carAnimation';
import { PopUp } from './components/popUp/popUp';
import { addWinnerInTable, getWinnersCars, updateWinner } from './winnersPageAPI';

const BASE_HOST = 'http://127.0.0.1:3000';

export async function getData(request: string) {
  const url = `${BASE_HOST}/${request}`;
  const res = await fetch(url);
  return res.json();
}

export async function getCarById(id: number) {
  const url = `${BASE_HOST}/garage?id=${id}`;
  const res = await fetch(url);
  return res.json();
}

export async function getAllCarsInGarage(page: number, limitNumber: number) {
  const url = `${BASE_HOST}/garage?_page=${page}&_limit=${limitNumber}`;
  const res = await fetch(url);
  return res.headers.get('X-Total-Count');
}

export async function getCarsInGarage(page: number, limitNumber: number) {
  const url = `${BASE_HOST}/garage?_page=${page}&_limit=${limitNumber}`;
  const res = await fetch(url);
  return res.json();
}

export async function addCarInGarage(name: string, color: string) {
  const car = {
    name,
    color,
  };

  const url = 'http://127.0.0.1:3000/garage';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  return res.json();
}

export async function deleteCarInGarage(id: number): Promise<void> {
  const url = `${BASE_HOST}/garage/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return res.json();
}

export async function updateCarInGarage(name: string, color: string, id: string | number) {
  const car = {
    name,
    color,
  };

  const url = `${BASE_HOST}/garage/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  return await res.json();
}

export async function addOneHundredCars(name: string, color: string) {
  const car = {
    name,
    color,
  };

  const url = 'http://127.0.0.1:3000/garage';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  return await res.json();
}

export async function startEngine(id: number) {
  const url = `${BASE_HOST}/engine?id=${id}&status=started`;
  const res = await fetch(url);
  return res.json();
}
let winner = 0;
export async function driveMod(id: number, time: number, color: string, modelCar: string, flag?: string, aloneCar?: string) {
  const controller = new AbortController();
  const winnerCar = {
    id: -1,
    time: -1,
    status: -1,
    color,
    model: modelCar,
    count: 1,
  };
  const url = `${BASE_HOST}/engine?id=${id}&status=drive`;
  await fetch(url, {
    signal: controller.signal,
  }).then((response) => {
    if (response.status === 500) {
      carAnimations(id, 0, 'broken');
    } else if (response.status === 200) {
      ++winner;
      if (aloneCar === 'alone') {
        getWinnersCars(1, 7).then((responses) => {
          for (const item in responses) {
            if (responses[item].id === id && responses[item].time > time) {
              // @ts-ignore
              updateWinner(id, ++responses[item].wins, time, color, modelCar);
            } else if (responses[item].id === id && responses[item].time <= time) {
              updateWinner(id, ++responses[item].wins, responses[item].time, color, modelCar);
            } else {
              addWinnerInTable(id, 1, time, color, modelCar);
            }
          }
        });
      }

      const curPage: HTMLElement | null = document.getElementById('current-page');
      if (curPage !== null) {
        if (flag === 'race' && winner === 1) {
          new PopUp(curPage, time, modelCar);
          getWinnersCars(1, 7).then((responses) => {
            for (const item in responses) {
              if (responses[item].id === id && responses[item].time > time) {

                // @ts-ignore
                updateWinner(id, ++responses[item].wins, time, color, modelCar);
              } else if (responses[item].id === id && responses[item].time <= time) {
                updateWinner(id, ++responses[item].wins, responses[item].time, color, modelCar);
              } else {
                addWinnerInTable(id, 1, time, color, modelCar);
              }
            }
          });
          controller.abort();
          setTimeout(() => {
            winner = 0;
          }, 11000);
        }
      }
      if (flag !== 'race') {
        winnerCar.time = time;
        winnerCar.id = id;
        winnerCar.status = response.status;
      }
    }
  });
}

export function carStart(id: number, colorCar: string, modelCar: string, flag?: string, aloneCar?: string) {
  let timeSec = 0;

  startEngine(id).then((response) => {
    timeSec = Math.round(response.distance / response.velocity) / 1000;

    carAnimations(id, timeSec, 'start');
  }).then((res) => driveMod(id, timeSec, colorCar, modelCar, flag, aloneCar));
}
