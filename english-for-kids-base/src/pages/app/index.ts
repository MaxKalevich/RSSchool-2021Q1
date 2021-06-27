import MainPage from '../main';
import Page from '../../core/templates/page';
import ActionSetA from '../actionSetA';
import ActionSetB from '../actionSetB';
import Header from '../../core/components';
import ErrorPage, { ErrorTypes } from '../error';
import ToggleButton from '../../components/toggleButton';
import Hamburger from '../../components/hamburger';
import ActionSetC from '../actionSetC';
import Emotion from '../emotion';
import AnimalSetA from '../animalSetA';
import AnimalSetB from '../animalSetB';
import Clothes from '../clothes';
import Adjective from '../adjective';

export const enum PageIds {
  mainPage = 'main-page',
  actionSetA = 'actionSetA-page',
  actionSetB = 'actionSetB-page',
  actionSetC = 'actionSetC-page',
  adjective = 'adjective-page',
  emotion = 'emotion-page',
  animalSetA = 'animalSetA-page',
  animalSetB = 'animalSetB-page',
  clothes = 'clothes-page',
  currPage = 'current-page',
}

class App {
  private static container: HTMLElement = document.body;

  private initialPage: MainPage;

  private static defaultPageId: string = PageIds.currPage;

  private header: Header;

  private buttonSwitch: ToggleButton;

  private hamburger: Hamburger;

  static renderNewPage(idPage: string) {
    const currentPage = document.querySelector(`#${App.defaultPageId}`);

    if (currentPage) {
      currentPage.remove();
    }

    let page: Page | null = null;

    if (idPage === PageIds.mainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.actionSetA) {
      page = new ActionSetA(idPage);
    } else if (idPage === PageIds.actionSetB) {
      page = new ActionSetB(idPage);
    } else if (idPage === PageIds.actionSetC) {
      page = new ActionSetC(idPage);
    } else if (idPage === PageIds.emotion) {
      page = new Emotion(idPage);
    } else if (idPage === PageIds.animalSetA) {
      page = new AnimalSetA(idPage);
    } else if (idPage === PageIds.animalSetB) {
      page = new AnimalSetB(idPage);
    } else if (idPage === PageIds.adjective) {
      page = new Adjective(idPage);
    } else if (idPage === PageIds.clothes) {
      page = new Clothes(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.ERROR_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header-wrapper');
    this.buttonSwitch = new ToggleButton();
    this.hamburger = new Hamburger();
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage(PageIds.mainPage);
    this.enableRouteChange();
    // @ts-ignore
    window.lication = '#main-page';
  }
}

export default App;
