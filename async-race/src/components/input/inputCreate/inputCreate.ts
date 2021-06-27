import './inputCreate.scss';
import { stateObject } from '../../../pages/garage-page/garage';

export class InputCreate {
  private readonly input: HTMLInputElement;
  inputTextCreate: string | undefined;


  constructor(parent: HTMLElement | null) {
    this.input = document.createElement('input');
    this.input.className = 'input-create';
    this.input.placeholder = 'Create Car-Name';
    this.input.type = 'text';
    if(parent !== null) {
      parent.append(this.input);

    }

    this.input.addEventListener('input', (e: Event) => {
      // @ts-ignore
      if (e.target.value !== null) {
        // @ts-ignore
        stateObject.inputValue = e.target.value;
      }
    });
  }

}
