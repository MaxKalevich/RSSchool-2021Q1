import './style_modal.scss';

class ModalWindow {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'modal';
    this.container.className = 'modal';
  }

  render(parent: HTMLElement): HTMLElement {
    const form: HTMLFormElement = document.createElement('form');
    form.className = 'modal-content';
    this.container.append(form);
    parent.append(this.container);

    const imgWrapper: HTMLElement = document.createElement('div');
    imgWrapper.className = 'imgcontainer';
    form.append(imgWrapper);

    const image: HTMLImageElement = document.createElement('img');
    image.src = './caramelka_spider.png';
    image.className = 'img';
    image.alt = 'logo';
    imgWrapper.append(image);

    const containerForm: HTMLElement = document.createElement('div');
    containerForm.className = 'container';
    form.append(containerForm);

    const labelName: HTMLLabelElement = document.createElement('label');
    labelName.setAttribute('for', 'uname');
    labelName.textContent = 'Login';
    labelName.style.fontSize = '20px';
    containerForm.append(labelName);

    const loginInput: HTMLInputElement = document.createElement('input');
    loginInput.type = 'text';
    loginInput.id = 'uname';
    loginInput.placeholder = 'Enter your username';
    loginInput.required = true;
    containerForm.append(loginInput);

    const labelPass: HTMLLabelElement = document.createElement('label');
    labelPass.setAttribute('for', 'psw');
    labelPass.textContent = 'Password';
    labelPass.style.fontSize = '20px';
    containerForm.append(labelPass);

    const passInput: HTMLInputElement = document.createElement('input');
    passInput.type = 'password';
    passInput.id = 'psw';
    passInput.placeholder = 'Enter your password';
    passInput.required = true;
    containerForm.append(passInput);

    const divContainer: HTMLElement = document.createElement('div');
    divContainer.className = 'container';
    containerForm.append(divContainer);

    const btn: HTMLButtonElement = document.createElement('button');
    btn.textContent = 'Send';
    btn.type = 'submit';
    btn.className = 'submit';
    divContainer.append(btn);

    const btnCancel: HTMLButtonElement = document.createElement('button');
    btnCancel.textContent = 'Send';
    btnCancel.type = 'button';
    btnCancel.className = 'cancelbtn';
    btnCancel.textContent = 'Cancel';
    btnCancel.addEventListener('click', () => {
      this.container.style.display = 'none';
    });
    divContainer.append(btnCancel);
    return this.container;
  }
}

export default ModalWindow;
