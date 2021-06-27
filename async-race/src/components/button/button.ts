import { addCarInGarage } from '../../asyncRaceAPI';

class Button {

  getButton(parent: HTMLElement, text: string) {
    const button = document.createElement('button');
    button.style.border = 'none';
    button.style.display = 'inline-block';
    button.style.backgroundColor = 'green';
    button.style.width = '120px';
    button.style.color = 'white';
    button.style.height = '30px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.marginRight = '15px';
    button.style.fontWeight = 'bold';
    button.innerText = text;
    button.style.borderRadius = '5px';
    parent.append(button);
  }

  getButtonGenerate(parent: HTMLElement, text: string) {
    const button = document.createElement('button');
    button.addEventListener('click', () => {

    });
    button.style.border = 'none';
    button.style.display = 'inline-block';
    button.style.backgroundColor = 'green';
    button.style.width = '120px';
    button.style.color = 'white';
    button.style.height = '30px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.marginRight = '15px';
    button.style.fontWeight = 'bold';
    button.innerText = text;
    button.style.borderRadius = '5px';
    parent.append(button);
  }
}

export default Button;
