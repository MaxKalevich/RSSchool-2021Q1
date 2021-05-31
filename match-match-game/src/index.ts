import './styles.scss';
import { App } from './app';
import { Stopwatch } from './components/stopwatch/stopwatch';

window.onload = () => {
  const appElement = document.body;
  new Stopwatch().timer();
  if (!appElement) throw Error('No App');
  new App(document.body).start();
};
