const BASE_HOST = 'http://127.0.0.1:3000';

// const GET_CAR = `http://127.0.0.1:3000/garage?_page=${1}&_limit=${1}`;

export async function getData(request: string): Promise<any> {
  const url = `${BASE_HOST}/${request}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getCarById(id: number) {
  const url = `http://127.0.0.1:3000/garage?id=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getAllCarsInGarage(page: number, limitNumber: number) {
  const url = `http://127.0.0.1:3000/garage?_page=${page}&_limit=${limitNumber}`;
  const res = await fetch(url);
  return res.headers.get('X-Total-Count');
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
  const data = await res.json();
  return data;
}

export async function deleteCarInGarage(id: string) {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}

export async function updateCarInGarage(name: string, color: string, id: string) {
  const car = {
    name,
    color,
  };

  const url = `http://127.0.0.1:3000/garage/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  const data = await res.json();
  return data;
}

export async function startCarsEngine(id: string, status: string) {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function driveMod(drive: string) {
  const url = `http://127.0.0.1:3000/engine?id=1&status=${drive}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
