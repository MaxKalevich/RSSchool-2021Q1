import MainPage from '../main';
import Page from '../../core/templates/page';
import ActionSetA from '../actionSetA';
import ActionSetB from '../actionSetB';
import Header from '../../core/components';

import ToggleButton from '../../components/toggleButton';
import Hamburger from '../../components/hamburger';

import Emotion from '../emotion';
import AnimalSetA from '../animalSetA';
import AnimalSetB from '../animalSetB';
import Clothes from '../clothes';
import Adjective from '../adjective';
import ActionSetC from '../auto';
import WinnerPage, { WinnerTypes } from '../winnerPage';
import AdminCategoriesPage from '../adminPages/categoriesPage';
import AdminWordsPage from '../adminPages/wordsPage';
import NoAuthorizedPage from "../noAuthorizedPage";

export const enum PageIds {
  mainPage = 'main-page',
  actionSetA = 'actionSetA-page',
  actionSetB = 'actionSetB-page',
  auto = 'Auto',
  adjective = 'adjective-page',
  emotion = 'emotion-page',
  animalSetA = 'animalSetA-page',
  animalSetB = 'animalSetB-page',
  clothes = 'clothes-page',
  currPage = 'current-page',
  winnerPage = 'winner-page',
  adminCategoriesPage = 'admin-categories-page',
  adminWordsPage = 'admin-words-page',
  noAuthorizedPage = 'no-authorized'
}

class App {
  private static container: HTMLElement = document.body;

  private initialPage: MainPage;

  private static defaultPageId: string = PageIds.currPage;

  private header: Header;

  private buttonSwitch: ToggleButton;

  private hamburger: Hamburger;

  static renderNewPage(idPage: string): void {
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
    } else if (idPage === PageIds.auto) {
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
    } else if (idPage === PageIds.winnerPage) {
      page = new WinnerPage(idPage, WinnerTypes.WINNER);
    } else if (idPage === PageIds.adminCategoriesPage) {
      page = new AdminCategoriesPage(idPage);
    } else if (idPage === PageIds.adminWordsPage) {
      page = new AdminWordsPage(idPage);
    } else if (idPage === PageIds.noAuthorizedPage) {
      page = new NoAuthorizedPage(idPage);
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
      if (hash === PageIds.adminCategoriesPage && !localStorage.getItem('token')) {
        App.renderNewPage(PageIds.noAuthorizedPage);
        setTimeout(() => {
          App.renderNewPage(PageIds.mainPage);
          history.pushState({}, 'null', '#main-page');
        }, 5000);
      } else if (hash === PageIds.adminWordsPage && !localStorage.getItem('token')) {
        App.renderNewPage(PageIds.noAuthorizedPage);
        setTimeout(() => {
          App.renderNewPage(PageIds.mainPage);
          history.pushState({}, 'null', '#main-page');
        }, 5000);
      } else {
        App.renderNewPage(hash);
      }
    });
  }

  constructor() {
    this.initialPage = new MainPage('main-page');
  //  this.initialPage = new AdminCategoriesPage('admin-categories-page');
    this.header = new Header('header', 'header-wrapper');
    this.buttonSwitch = new ToggleButton();
    this.hamburger = new Hamburger();
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage(PageIds.mainPage);
  //  App.renderNewPage(PageIds.adminCategoriesPage);
    this.enableRouteChange();
    // @ts-ignore
    window.lication = '#main-page';

    const wrapper = document.querySelector('.burger-button-container');

    let selectedTd: HTMLElement;
    function highlight(td: any) {
      if (selectedTd) {
        selectedTd.classList.remove('active');
      }
      selectedTd = td;
      selectedTd.classList.add('active');
    }
    // @ts-ignore
    wrapper.onclick = function(event) {
      let target = event.target;
      highlight(target);
    };
  }
}

export default App;
