import './styles.scss';
import { Application } from './pages/application/application';
import { Database } from './indexed-db';
import { User } from './components/user/user';

const application = new Application();
application.run();

const validateName: HTMLElement | null = document.querySelector('input');
const validateFamily: HTMLElement | null = document.querySelector('.input-last-name');
const buttonSend: HTMLButtonElement | null = document.querySelector('.send');
const divFirstName: HTMLElement | null = document.querySelector('.name-input');
const divLastName: HTMLElement | null = document.querySelector('.last-name-input');

const nameUser: HTMLElement | null = document.querySelector('.name-user');
const emailUser: HTMLElement | null = document.querySelector('.email-user');
const registrUser: HTMLElement | null = document.querySelector('.registr');

if (divFirstName !== null) {
  divFirstName.classList.add('display-none');
}
if (divLastName !== null) {
  divLastName.classList.add('display-none');
}
function val(e: any) {
  if (e.target.value.length < 3) {
    if (divFirstName !== null && validateName !== null && buttonSend !== null) {
      divFirstName.classList.remove('display-none');
      validateName.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (e.target.value.length > 3) {
    if (divFirstName !== null && validateName !== null && buttonSend !== null) {
      divFirstName.classList.add('display-none');
      validateName.classList.remove('red');
      buttonSend.disabled = false;
    }
  }
  if (e.target.value.length > 29) {
    if (divFirstName !== null && validateName !== null) {
      divFirstName.classList.remove('display-none');
      validateName.classList.add('red');
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const val = e.target.value;
  const onlyLetters = /^(([a-zA-Z_\s]+)|([а-яёА-ЯЁ_\s]+))$/.test(val);
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
      divLastName.classList.remove('display-none');
      validateFamily.classList.add('red');
      buttonSend.disabled = true;
    }
  } else if (e.target.value.length > 3) {
    if (divLastName !== null && validateFamily !== null && buttonSend !== null) {
      divLastName.classList.add('display-none');
      validateFamily.classList.remove('red');
      buttonSend.disabled = false;
    }
  }
  if (e.target.value.length > 29) {
    if (divLastName !== null && validateFamily !== null) {
      divLastName.classList.remove('display-none');
      validateFamily.classList.add('red');
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const val = e.target.value;
  const onlyLetters = /^(([a-zA-Z_\s]+)|([а-яёА-ЯЁ_\s]+))$/.test(val);
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

let form: HTMLFormElement | null = document.body.querySelector('form');

let dataBase = new Database();
dataBase.init('maxkalevich');
function add(first: string, last: string, email: string) {
  dataBase.write(first, last, email);
  dataBase.readAll();
}

if (form !== null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form !== null) {
      // console.dir(form)
      // @ts-ignore
      const name = form.elements[0].value;
      // @ts-ignore
      const family = form.elements[1].value;
      // @ts-ignore
      const emailAddress = form.elements[2].value;
      const user = new User(name, family, emailAddress);
     // console.log(user.userName,user.lastName, user.userEmail)
      form.style.display = 'none';
      if (emailUser !== null && nameUser !== null && registrUser !== null) {
        // @ts-ignore
        registrUser.innerText = 'Registration was successful';
        // @ts-ignore
        nameUser.innerText = `Your name: ${new User(name, family, emailAddress).userName}`;
        // @ts-ignore
        emailUser.innerText = `Your last name: ${new User(name, family, emailAddress).lastName}`;
      }

     // add(name, family, emailAddress);
   let note = dataBase.getOne();
    }
  });
}

