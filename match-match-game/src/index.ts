import './styles.scss';
import { Application } from './pages/application/application';

const application = new Application();
application.run();
const validateName = document.querySelector('input');
const validateFamily = document.querySelector('.input-last-name');
const buttonSend: HTMLButtonElement | null = document.querySelector('.send');
const div: HTMLElement | null = document.querySelector('.name-input');
const divLastName: HTMLElement | null = document.querySelector('.last-name-input');
if (div !== null) {
  div.classList.add('d');
}
if (divLastName !== null) {
  divLastName.classList.add('d');
}
function val(e: any) {
  if (e.target.value.length < 3) {
    if (div !== null && validateName !== null && buttonSend !== null) {
      div.classList.remove('d');
      validateName.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (e.target.value.length > 3) {
    if (div !== null && validateName !== null && buttonSend !== null) {
      div.classList.add('d');
      validateName.classList.remove('red');
      buttonSend.disabled = false;
    }
  }
  if (e.target.value.length > 29) {
    if (div !== null && validateName !== null) {
      div.classList.remove('d');
      validateName.classList.add('red');
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const val = e.target.value;
  const onlyLetters = /^(([a-z_\s]+)|([а-яё_\s]+))$/.test(val);
  if (!onlyLetters) {
    if (validateName !== null && buttonSend !== null) {
      validateName.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (validateName !== null && buttonSend !== null) {
    validateName.classList.remove('red');
    buttonSend.disabled = false;
  }
}

function valid(e: any) {
  if (e.target.value.length < 3) {
    if (divLastName !== null && validateFamily !== null && buttonSend !== null) {
      divLastName.classList.remove('d');
      validateFamily.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (e.target.value.length > 3) {
    if (divLastName !== null && validateFamily !== null && buttonSend !== null) {
      divLastName.classList.add('d');
      validateFamily.classList.remove('red');
      buttonSend.disabled = false;
    }
  }
  if (e.target.value.length > 29) {
    if (divLastName !== null && validateFamily !== null) {
      divLastName.classList.remove('d');
      validateFamily.classList.add('red');
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const val = e.target.value;
  const onlyLetters = /^(([a-z_\s]+)|([а-яё_\s]+))$/.test(val);
  if (!onlyLetters) {
    if (validateFamily !== null && buttonSend !== null) {
      validateFamily.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (validateFamily !== null && buttonSend !== null) {
    validateFamily.classList.remove('red');
    buttonSend.disabled = false;
  }
}
if (validateName !== null) {
  validateName.addEventListener('input', (e) => val(e));
}

if (validateFamily !== null) {
  validateFamily.addEventListener('input', (e) => valid(e));
}
