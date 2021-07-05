import { hideSidebar } from './hideSidebar';
import App from './pages/app';
import './style.scss';

const app = new App();
app.run();

history.pushState({}, 'null', '#main-page');

hideSidebar();
