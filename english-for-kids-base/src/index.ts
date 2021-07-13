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
  form.addEventListener('submit', () => {
    const inputName = document.getElementById('uname');
    const inputPass = document.getElementById('psw');
    const errorMessage = document.querySelector('.imgcontainer');
    if (inputName && inputPass !== null) {
      // @ts-ignore
      authUser(inputName.value, inputPass.value).then((r) => {
        if (r.message) {
          if (errorMessage !== null) {
            errorMessage.textContent = r.message;
          }
        } else {
          localStorage.setItem('token', r);
          App.renderNewPage('admin-categories-page');
          history.pushState({}, 'null', '#admin-categories-page');
          const logOut = document.querySelector('.log-out');
// @ts-ignore
          logOut.addEventListener('click', () => {
            localStorage.removeItem('token');
            console.log('Токен удален');
            App.renderNewPage('main-page');
            history.pushState({}, 'null', '#main-page');
            const head = document.querySelector('.header-wrapper');
            console.log(head);
            if (head !== null) {
              // @ts-ignore
              head.style.display = 'flex';
            }
          });
        }
      });
    }
  });
}
