import App from './pages/app';
import './style.scss';

const app = new App();
app.run();
// @ts-ignore
history.pushState({}, null, '#main-page');
