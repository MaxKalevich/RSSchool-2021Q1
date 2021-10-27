import './popUp.scss';

export class PopUp {
  element: HTMLElement;

  element2: HTMLElement;

  element3: HTMLElement;

  constructor(parent: HTMLElement, time: number, model: string) {
    this.element = document.createElement('div');
    this.element3 = document.createElement('button');
    this.element.className = 'b-popup';
    this.element3.className = 'btnPopUp';

    parent.append(this.element);
    this.element2 = document.createElement('div');
    this.element2.className = 'b-popup-content';
    this.element2.innerText = `Машина ${model} финишировала поервой со временем ${time}`;
    this.element.append(this.element2);
    this.element3.innerText = 'close';
    this.element3.onclick = () => {
      this.element.style.display = 'none';
    };
    this.element.append(this.element3);
  }
}
