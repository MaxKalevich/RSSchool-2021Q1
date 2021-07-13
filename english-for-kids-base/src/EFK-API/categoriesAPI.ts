export async function getCategoriesById(id: number) {
  const url = `http://localhost:3000/api/categories/${id}`;
  const res = await fetch(url);
  return res.json();
}

export async function authUser(login: string, password: string) {
  const body = {
    username: login,
    password,
  };
  const url = 'http://localhost:3000/auth/login';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}

// export async function addCarInGarage(name: string, color: string) {
//   const car = {
//     name,
//     color,
//   };
//
//   const url = 'http://127.0.0.1:3000/garage';
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(car),
//   });
//   const data = await res.json();
//   return data;
// }
