import './inputUpdate.scss';
import { stateObject } from '../../../pages/garage-page/garage';

export class InputUpdate {
  private readonly input: HTMLInputElement;

  inputTextCreate: string | undefined;

  constructor(parent: HTMLElement | null) {
    this.input = document.createElement('input');
    this.input.className = 'input-update';
    this.input.placeholder = 'Update Car-Name';
    this.input.type = 'text';

    if (parent !== null) {
      parent.append(this.input);
    }

    this.input.addEventListener('input', (e: Event) => {
      // @ts-ignore
      if (e.target.value !== null) {
        // @ts-ignore
        stateObject.updateName = this.input.value;
      }
    });
  }
}
