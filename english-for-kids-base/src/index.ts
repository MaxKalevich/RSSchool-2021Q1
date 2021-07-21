import { hideSidebar } from './hideSidebar';
import App from './pages/app';
import './style.scss';
import { authUser } from './EFK-API/categoriesAPI';

const app = new App();
app.run();

history.pushState({}, 'null', '#main-page');

hideSidebar();

const form = document.querySelector('.modal-content');
if (form !== null) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputName = document.getElementById('uname');
    const inputPass = document.getElementById('psw');
    const errorMessage = document.querySelector('.imgcontainer');
    if (inputName && inputPass !== null) {
      // @ts-ignore
      authUser(inputName.value, inputPass.value).then((r) => {
        if (r.message && errorMessage !== null) {
            errorMessage.textContent = r.message;
        } else {  
          localStorage.setItem('token', r);
          App.renderNewPage('admin-categories-page');
          history.pushState({}, 'null', '#admin-categories-page');
        }
      });
    }
  });
}
