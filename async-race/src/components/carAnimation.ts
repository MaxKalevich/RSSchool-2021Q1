export function carAnimations(id: number, time: number, status:string):void {
  const car = document.getElementById(`${id}-car-id`);
  if (car) {
    if (status === 'start') {
      car.style.transition = `${time}s linear`;
      car.style.left = '85%';
    } else if (status === 'reset') {
      car.style.transition = 'initial';
      car.style.left = '5px';
    } else if (status === 'broken') {
      const posY = car.offsetLeft;
      car.style.transition = 'initial';
      car.style.left = `${posY}px`;
    }
  }
}
