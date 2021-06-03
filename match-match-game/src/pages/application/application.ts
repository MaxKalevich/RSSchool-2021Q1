import { About } from '../about';
import { SettingsPage } from '../settings-page';
import Page from '../../core/templates/page';
import { StatisticsPage } from '../statistics-page';
// eslint-disable-next-line import/no-cycle
import { Header } from '../../components/header/header';
import { AppGamePage } from '../game-page/app-game-page';

export const enum PageIds {
  ABOUT_PAGE = 'about-page',
  SETTINGS_PAGE = 'settings-page',
  STATISTICS_PAGE = 'statistics-page',
  GAME_PAGE = 'game-page',
}

export class Application {
  private static container: HTMLElement = document.body;

  private static defaultPageID = 'current-page';

  private initialPage: About;

  private header: Header;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${Application.defaultPageID}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.ABOUT_PAGE) {
      page = new About(idPage);
    } else if (idPage === PageIds.SETTINGS_PAGE) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.STATISTICS_PAGE) {
      page = new StatisticsPage(idPage);
    } else if (idPage === PageIds.GAME_PAGE) {
      page = new AppGamePage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = Application.defaultPageID;
      Application.container.append(pageHTML);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      Application.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new About('About');
    this.header = new Header();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  run() {
    // const aboutPage = this.initialPage.render();
    // this.container.append(aboutPage);
    // return this.container;
    //  new App(document.body).start();
    this.enableRouteChange();
    Application.container.append(this.header.render());
    Application.renderNewPage('about-page');
  }
}
