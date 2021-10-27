const baseUrl = 'http://127.0.0.1:3000/';

export async function getWinners(page: number, limitNumber: number): Promise<string | null> {
  const url = `${baseUrl}winners?_page=${page}&_limit=${limitNumber}`;
  const res = await fetch(url);
  return res.headers.get('X-Total-Count');
}

export async function getWinnersCars(page: number, limitNumber: number) {
  const url = `${baseUrl}winners?_page=${page}&_limit=${limitNumber}`;
  const res = await fetch(url);
  return res.json();
}

export async function getWinnersCarsSort(sort: string) {
  const url = `${baseUrl}winners?_sort=${sort}`;
  const res = await fetch(url);
  return res.json();
}

export async function addWinnerInTable(numberIdent: number, numberWins = 0, time: number,
  color: string, nameCar: string) {
  const winner = {
    id: numberIdent,
    wins: numberWins,
    time,
    color,
    name: nameCar,
  };

  const url = 'http://127.0.0.1:3000/winners';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  });
  return await res.json();
}

export async function updateWinner(id: number, winnerAll: number, time: number, color: string, nameCar: string) {
  const winner = {
    id,
    wins: winnerAll,
    time,
    color,
    name: nameCar,
  };

  const url = `${baseUrl}winners/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  });
  return await res.json();
}

export async function deleteCarInWinners(id: number): Promise<void> {
  const url = `${baseUrl}winners/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return res.json();
}

export async function getWinnersCarsSorted(page: number, limitNumber: number, sort: string, asc = 'ASC') {
  const url = `${baseUrl}winners?_page=${page}&_limit=${limitNumber}&_sort=${sort}&_order=${asc}`;
  const res = await fetch(url);
  return res.json();
}
